import AppDataSource from "../../data-source";
import { Users } from "../../entities/user.entity";
import { IUserLogin } from "../../interfaces/users";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { AppError } from "../../errors/appError";

const userLoginService = async ({ email, password }: IUserLogin) => {
  const userRepository = AppDataSource.getRepository(Users);

  const users = await userRepository.find();

  const user = users.find((e) => e.email === email);

  if (!user) {
    throw new AppError(400, "User not found");
  }

  if (!bcrypt.compareSync(password, user.password)) {
    throw new AppError(403, "Wrong emai or password");
  }

  if (!user.isActive) {
    throw new AppError(400, "User isn't active");
  }

  const token = jwt.sign(
    { email: email, isAdm: user.isAdm },
    String(process.env.SECRET_KEY),
    { expiresIn: "1d" }
  );

  return token;
};

export default userLoginService;
