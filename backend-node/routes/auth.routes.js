// routes/auth.routes.js

import express from "express";
import { login, logout, signup } from "../controllers/auth.controller.js"; // Ensure the correct file extension

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/logout", logout);

export default router;
