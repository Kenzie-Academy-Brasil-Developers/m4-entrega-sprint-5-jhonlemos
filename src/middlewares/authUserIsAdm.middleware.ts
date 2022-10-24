import { NextFunction, Response, Request } from "express";
import jwt from "jsonwebtoken";

const userTokenAndIsAdm = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      res.status(401).send({
        status: "Error",
        message: "Token not found",
      });
    }

    jwt.verify(
      token as string,
      process.env.SECRET_KEY as string,
      (err: any, decoded: any) => {
        if (err) {
          res.status(401).send({
            status: "Error",
            message: "Invalid Token",
          });
        }
        const userAdm = decoded.isAdm;

        if (userAdm === false) {
          res.status(403).send({
            status: "Error",
            message: "You don't have permission",
          });
        }

        next();
      }
    );
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default userTokenAndIsAdm;
