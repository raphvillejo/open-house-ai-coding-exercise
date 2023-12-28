import { Router } from "express";
import { searchController } from "../controllers/searchController";

const router = Router();

router.post("/", searchController);

export { router as searchRoutes };
