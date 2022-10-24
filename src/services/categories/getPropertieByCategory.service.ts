import AppDataSource from "../../data-source";
import { Categories } from "../../entities/category.entity";
import { AppError } from "../../errors/appError";
import { IIdCategory } from "../../interfaces/categories";

const getPropertiesByCategService = async ({ id }: IIdCategory) => {
  const categoryRepo = AppDataSource.getRepository(Categories);

  const categories = await categoryRepo.find();

  const category = categories.find((e) => e.id === id);

  if (!category) {
    throw new AppError(404, "Invalid Id");
  }

  return category.properties;
};

export default getPropertiesByCategService;
