import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import { IUserLogin } from "../../interfaces/users";
import userLoginService from "../../services/users/userLogin.service";

const loginUserController = async (req: Request, res: Response) => {
  try {
    const { email, password }: IUserLogin = req.body;

    const token = await userLoginService({ email, password });

    return res.send({ token });
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default loginUserController;
