import { Router } from "express";
import { requireLogin } from "../middlewares/auth.middleware.js";
import { getAllUsers, getMessages } from "../controllers/user.controller.js";

const UserRouter = Router();

UserRouter.use(requireLogin);

UserRouter.get("/", getAllUsers);
UserRouter.get("/messages/:userId", requireLogin, getMessages)

export default UserRouter;