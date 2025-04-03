import { Router } from "express";
import { login, signup } from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.post('/login',login);
userRouter.post('/signup',signup);

export {userRouter}