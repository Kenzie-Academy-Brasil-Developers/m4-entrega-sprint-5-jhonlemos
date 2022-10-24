import { Router } from "express";
import createSchedulesController from "../controllers/schedules/createSchedule.controller";
import listSchedulesController from "../controllers/schedules/listSchedules.controller";

import userTokenAndIsAdm from "../middlewares/authUserIsAdm.middleware";
import authTokenMiddleware from "../middlewares/authToken.middleware";

const routes = Router();

export const schedulesRoutes = () => {
  routes.post("/", authTokenMiddleware, createSchedulesController);
  routes.get("/properties/:id", userTokenAndIsAdm, listSchedulesController);
  return routes;
};
