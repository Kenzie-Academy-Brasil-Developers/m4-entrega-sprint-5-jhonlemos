import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import getCategoriesService from "../../services/categories/getCategories.service";

const getCategoriesController = async (req: Request, res: Response) => {
  try {
    const categories = await getCategoriesService();

    return res.send(categories);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};
export default getCategoriesController;
