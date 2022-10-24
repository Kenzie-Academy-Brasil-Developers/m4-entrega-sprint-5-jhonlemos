import AppDataSource from "../../data-source";
import { Users } from "../../entities/user.entity";
import { IUserCreate, IUserRequest } from "../../interfaces/users";
import { v4 as uuid } from "uuid";
import bcrypt from "bcrypt";
import { AppError } from "../../errors/appError";

const createUserService = async ({
  name,
  email,
  password,
  isAdm,
}: IUserRequest) => {
  const userRepository = AppDataSource.getRepository(Users);

  const users = await userRepository.find();

  const userAlreadyExists = users.find((e) => e.email === email);

  if (userAlreadyExists) {
    throw new AppError(400, "User already exists");
  }

  let d: Date = new Date();
  const date: string = `${d.getDate()}/${d.getMonth()}/${d.getFullYear()}, ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;

  const hashedPass = await bcrypt.hash(password, 10);

  const newUser: IUserCreate = userRepository.create({
    id: uuid(),
    name,
    email,
    password: hashedPass,
    isActive: true,
    isAdm,
    createdAt: date,
    updatedAt: date,
  });

  await userRepository.save(newUser);

  return newUser;
};

export default createUserService;
