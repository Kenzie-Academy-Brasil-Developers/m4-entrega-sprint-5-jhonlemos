import AppDataSource from "../../data-source";
import { Addresses } from "../../entities/addresses.entity";
import { Properties } from "../../entities/properties.entity";
import {
  IPropertyRequest,
  IAddress,
  IProperty,
} from "../../interfaces/properties";
import { v4 as uuid } from "uuid";
import { Categories } from "../../entities/category.entity";
import { AppError } from "../../errors/appError";

const createPropertieService = async ({
  value,
  size,
  address,
  categoryId,
}: IPropertyRequest) => {
  const propRepo = AppDataSource.getRepository(Properties);
  const categoryRepo = AppDataSource.getRepository(Categories);
  const addressRepo = AppDataSource.getRepository(Addresses);

  let d: Date = new Date();
  const date: string = `${d.getDate()}/${d.getMonth()}/${d.getFullYear()}, ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;

  const adresses = await addressRepo.find();

  const categories = await categoryRepo.find();

  const category = categories.find((e) => e.id === categoryId);

  if (!category) {
    throw new AppError(404, "Category not exists");
  }

  const addressAlreadyExists = adresses.find(
    (e) => e.district === address.district
  );

  if (addressAlreadyExists) {
    throw new AppError(400, "This address already registred!");
  }

  const properties = await propRepo.find();

  const property = properties.find((e) => e.value === value && e.size === size);

  if (property) {
    throw new AppError(400, "This propertie already exists");
  }

  const newAddress: IAddress = addressRepo.create({
    id: uuid(),
    district: address.district,
    zipCode: address.zipCode,
    number: address.number,
    city: address.city,
    state: address.state,
  });

  await addressRepo.save(newAddress);

  const newProperty: IProperty = propRepo.create({
    id: uuid(),
    sold: false,
    value,
    size,
    createdAt: date,
    updatedAt: date,
    address: newAddress,
    category: category,
  });

  await propRepo.save(newProperty);

  return newProperty;
};

export default createPropertieService;
