import AppDataSource from "../../data-source";
import { Properties } from "../../entities/properties.entity";
import { Schedules } from "../../entities/schedules.entity";
import { ISchedule, IScheduleRequest } from "../../interfaces/schedules";
import { Users } from "../../entities/user.entity";
import { v4 as uuid } from "uuid";
import { AppError } from "../../errors/appError";

const createScheduleService = async ({
  date,
  hour,
  propertyId,
  userId,
}: IScheduleRequest) => {
  if (!userId || !date || !hour || !propertyId) {
    throw new Error("Missing body informations");
  }

  const scheduleRepo = AppDataSource.getRepository(Schedules);
  const propertiesRepo = AppDataSource.getRepository(Properties);
  const userRepo = AppDataSource.getRepository(Users);

  const schedules = await scheduleRepo.find();
  const properties = await propertiesRepo.find();
  const users = await userRepo.find();

  const property = properties.find((e) => e.id === propertyId);

  if (!property) {
    throw new AppError(404, "Inavalid Property Id");
  }
  const schedule = schedules.find((e) => e.hour === hour && e.date === date);

  if (schedule) {
    throw new AppError(400, "There is already a visitor at this horary");
  }

  if (Number(hour.slice(0, 2)) < 8 || Number(hour.slice(0, 2)) > 18) {
    throw new AppError(
      400,
      "You can only schedule a visit during business hours"
    );
  } 

  const user = users.find((e) => e.id === userId);

  const newSchedule: ISchedule = scheduleRepo.create({
    id: uuid(),
    hour,
    user,
    properties: property,
    date,
  });

  await scheduleRepo.save(newSchedule);

  return newSchedule;
};

export default createScheduleService;
