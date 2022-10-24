import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import { Users } from "../entities/user.entity";

const authTokenMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userRepo = AppDataSource.getRepository(Users);
  const users = await userRepo.find();

  const token = req.headers.authorization as string;

  if (!token) {
    return res.status(401).send({
      status: "Error",
      message: "Missing authorization token",
    });
  }

  jwt.verify(
    token,
    process.env.SECRET_KEY as string,
    async (err: any, decoded: any) => {
      if (err) {
        return res.status(400).send({
          status: err.name,
          message: err.message,
        });
      }

      const user = users.find((e) => e.email === decoded.email);

      if (!user) {
        return res.status(400).send({
          status: "Error",
          message: "User not found",
        });
      }

      req.user = { isAdm: decoded.isAdm, userId: user.id };

      next();
    }
  );
};
export default authTokenMiddleware;
