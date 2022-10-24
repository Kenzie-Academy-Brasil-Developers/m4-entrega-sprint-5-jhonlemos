import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import getPropertiesService from "../../services/properties/getProperties.service";

const getPropertiesController = async (req: Request, res: Response) => {
  try {
    const properties = await getPropertiesService();

    return res.send(properties);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default getPropertiesController;
