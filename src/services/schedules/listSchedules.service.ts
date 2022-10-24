import AppDataSource from "../../data-source";
import { Properties } from "../../entities/properties.entity";
import { Schedules } from "../../entities/schedules.entity";
import { AppError } from "../../errors/appError";

const listScheduleService = async (id: string) => {
  const propertiesRepo = AppDataSource.getRepository(Properties);

  const properties = await propertiesRepo.find();

  const propertie = properties.find((e) => e.id === id);

  if (!propertie) {
    throw new AppError(404, "Incorrect Id");
  }

  if(propertie.schedules.length === 0){
    throw new AppError(400, "This propertie don't have schedules")
  }

  return propertie.schedules
};

export default listScheduleService;
