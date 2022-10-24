import AppDataSource from "../../data-source";
import { Categories } from "../../entities/category.entity";

import { v4 as uuid } from "uuid";
import { ICategory, ICategoryRequest } from "../../interfaces/categories";
import { AppError } from "../../errors/appError";

const createCategoryService = async ({ name }: ICategoryRequest) => {
  const categRepo = AppDataSource.getRepository(Categories);

  const categories = await categRepo.find();

  const category = categories.find((e) => e.name === name);

  if (!name) {
    throw new AppError(400, "Name required");
  }

  if (category) {
    throw new AppError(400, "Category already exists");
  }

  const newCategory: ICategory = categRepo.create({
    id: uuid(),
    name,
  });

  categRepo.save(newCategory);

  return newCategory;
};

export default createCategoryService;
