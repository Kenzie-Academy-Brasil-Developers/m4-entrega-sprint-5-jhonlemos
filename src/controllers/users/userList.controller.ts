import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import userListService from "../../services/users/userList.service";
import { instanceToPlain } from "class-transformer";

const listUsersController = async (req: Request, res: Response) => {
  try {
    const users = await userListService();

    return res.send(instanceToPlain(users));
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default listUsersController;
