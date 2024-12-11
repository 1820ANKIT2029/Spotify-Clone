import { Router } from "express";
import { requireAdmin, requireLogin } from "../middlewares/auth.middleware.js";
import { 
    checkAdmin,
    createAlbum,
    createSong, 
    deleteAlbum, 
    deleteSong 
} from "../controllers/admin.controller.js";

const AdminRouter = Router();

AdminRouter.use(requireLogin, requireAdmin);

AdminRouter.get("/check", checkAdmin);

AdminRouter.post("/songs", createSong);
AdminRouter.delete("/songs/:id", deleteSong);

AdminRouter.post("/albums", createAlbum);
AdminRouter.delete("/albums/:id", deleteAlbum);

export default AdminRouter;