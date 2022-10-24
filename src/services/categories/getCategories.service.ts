import AppDataSource from "../../data-source";
import { Categories } from "../../entities/category.entity";

const getCategoriesService = async () => {
  const categRepo = AppDataSource.getRepository(Categories);

  const categories = await categRepo.find();

  return categories;
};

export default getCategoriesService;
