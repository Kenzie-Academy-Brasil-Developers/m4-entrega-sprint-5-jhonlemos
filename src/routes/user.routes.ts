import { Router } from "express";
import createUserController from "../controllers/users/userCreate.controller";
import userDeleteController from "../controllers/users/userDelete.controller";
import listUsersController from "../controllers/users/userList.controller";
import loginUserController from "../controllers/users/userLogin.controller";

import userTokenAndIsAdm from "../middlewares/authUserIsAdm.middleware";

const routes = Router();

export const userRoutes = () => {
  routes.post("/users", createUserController);
  routes.get("/users", userTokenAndIsAdm, listUsersController);
  routes.post("/login", loginUserController);
  routes.delete("/users/:id", userTokenAndIsAdm, userDeleteController);

  return routes;
};
