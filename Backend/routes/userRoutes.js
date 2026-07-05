import express from "express";

import { googleAuth, getMe, logout} from "../controllers/userController.js";

import {protect} from "../middleware/userAuth.js";

const router = express.Router();

router.post("/google",googleAuth);

router.get("/me",protect,getMe);

router.post("/logout",logout);

export default router;