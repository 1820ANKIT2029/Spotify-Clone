import { Router } from "express";
import { requireLogin } from "../middlewares/auth.middleware.js";
import { getAllUsers } from "../controllers/user.controller.js";

const UserRouter = Router();

UserRouter.use(requireLogin);

UserRouter.get("/", getAllUsers);

export default UserRouter;