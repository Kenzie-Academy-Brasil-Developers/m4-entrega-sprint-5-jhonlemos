import { Express } from "express";
import { categoryRoutes } from "./category.routes";
import { propertiesRoutes } from "./properties.routes";
import { schedulesRoutes } from "./schedules.routes";
import { userRoutes } from "./user.routes";

export const appRoutes = (app: Express) => {
  app.use("", userRoutes());
  app.use("/categories", categoryRoutes());
  app.use("/properties", propertiesRoutes());
  app.use("/schedules", schedulesRoutes());
};
