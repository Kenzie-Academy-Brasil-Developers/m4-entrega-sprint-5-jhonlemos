import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import getPropertiesByCategService from "../../services/categories/getPropertieByCategory.service";

const getPropertiesByCategController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const props = await getPropertiesByCategService({ id });

    return res.send(props);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default getPropertiesByCategController;
