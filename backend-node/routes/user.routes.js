import express from "express";
import { isAuthenticate } from "../middleware/verifyToken.js";
import { getUserForSideBar } from "../controllers/user.controller.js";

const router = express.Router()

router.get("/", isAuthenticate, getUserForSideBar)

export default router