import { Router } from "express";

import userTokenAndIsAdm from "../middlewares/authUserIsAdm.middleware";

import createCategoryController from "../controllers/categories/categoryCreate.controller";
import getCategoriesController from "../controllers/categories/getCategories.controller";
import getPropertiesByCategController from "../controllers/categories/getPropertiesByCateg.controller";

const routes = Router();

export const categoryRoutes = () => {
  routes.post("/", userTokenAndIsAdm, createCategoryController);
  routes.get("/", getCategoriesController);
  routes.get("/:id/properties", getPropertiesByCategController);

  return routes;
};
