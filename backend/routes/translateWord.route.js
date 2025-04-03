import { Router } from "express";
import { translateWords } from "../controllers/tanslate.controller.js";

const translateWordRouter = Router();

translateWordRouter.post('/translating',translateWords)

export {translateWordRouter}