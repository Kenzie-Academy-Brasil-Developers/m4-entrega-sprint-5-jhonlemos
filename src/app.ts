import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import "reflect-metadata";
import { AppError } from "./errors/appError";
import { appRoutes } from "./routes";

const app = express();

app.use(express.json());

app.use((err: Error, req: Request, res: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).send({
      message: err.message,
    });
  }

  return res.status(500).send({
    message: "Internal Server Error",
  });
});

appRoutes(app);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof Error) {
    return response.status(400).json({
      status: "error",
      message: err.message,
    });
  }

  return response.status(500).json({
    status: "error",
    message: "Internal server error",
  });
});

export default app;
