import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import createUserService from "../../services/users/userCreate.service";
import { instanceToPlain } from "class-transformer";

const createUserController = async (req: Request, res: Response) => {
  try {
    const { name, email, password, isAdm } = req.body;

    const newUser = await createUserService({ name, email, password, isAdm });

    return res.status(201).send(instanceToPlain(newUser));
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default createUserController;
