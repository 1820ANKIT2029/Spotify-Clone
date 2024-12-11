import { Router } from "express";
import { getStats } from "../controllers/stats.controller.js";
import { requireAdmin, requireLogin } from "../middlewares/auth.middleware.js";

const StatsRouter = Router();

StatsRouter.get("/", requireLogin, requireAdmin ,getStats);

export default StatsRouter;