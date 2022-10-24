import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";

import createCategoryService from "../../services/categories/createCategory.service";

const createCategoryController = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;

    const newCategory = await createCategoryService({ name });

    return res.status(201).send(newCategory);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};
export default createCategoryController;
