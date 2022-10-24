import AppDataSource from "../../data-source";
import { Properties } from "../../entities/properties.entity";

const getPropertiesService = async () => {
  const propRepo = AppDataSource.getRepository(Properties);

  const properties = await propRepo.find();

  return properties;
};
export default getPropertiesService;
