import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import { IScheduleRequest } from "../../interfaces/schedules";
import createScheduleService from "../../services/schedules/createSchedule.service";

const createSchedulesController = async (req: Request, res: Response) => {
  try {
    const { propertyId, date, hour }: IScheduleRequest = req.body;
    const userId = req.user.userId;

    const schedule = await createScheduleService({
      userId,
      propertyId,
      date,
      hour,
    });

    return res.status(201).send(schedule);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};
export default createSchedulesController;
