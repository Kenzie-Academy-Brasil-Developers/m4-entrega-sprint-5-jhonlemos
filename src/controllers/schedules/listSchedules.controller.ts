import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import listScheduleService from "../../services/schedules/listSchedules.service";

const listSchedulesController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const schedules = await listScheduleService(id);

    return res.send(schedules);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default listSchedulesController;
