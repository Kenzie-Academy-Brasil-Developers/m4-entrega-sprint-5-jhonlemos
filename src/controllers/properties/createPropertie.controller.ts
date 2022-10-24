import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import { IPropertyRequest } from "../../interfaces/properties";
import createPropertieService from "../../services/properties/createPropertie.service";

const createPropertieController = async (req: Request, res: Response) => {
  try {
    const { value, size, address, categoryId }: IPropertyRequest = req.body;

    const prop = await createPropertieService({
      value,
      size,
      address,
      categoryId,
    });

    return res.status(201).send(prop);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default createPropertieController;
