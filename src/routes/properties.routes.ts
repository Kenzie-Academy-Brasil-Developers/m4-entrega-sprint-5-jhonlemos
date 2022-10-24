import { Router } from "express";
import createPropertieController from "../controllers/properties/createPropertie.controller";
import getPropertiesController from "../controllers/properties/getProperties.controller";
import userTokenAndIsAdm from "../middlewares/authUserIsAdm.middleware";

const routes = Router();

export const propertiesRoutes = () => {
  routes.post("/", userTokenAndIsAdm, createPropertieController);
  routes.get("/", getPropertiesController);
  return routes;
};
