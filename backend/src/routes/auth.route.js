import { Router } from "express";
import { AuthCallback } from "../controllers/auth.controller.js";

const AuthRouter = Router();

AuthRouter.post("/callback", AuthCallback);

export default AuthRouter;