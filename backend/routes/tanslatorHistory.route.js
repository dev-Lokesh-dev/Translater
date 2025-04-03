import { Router } from "express";
import { createTranslatorHistory, getTranslatorHistory } from "../controllers/translatorHistory.controller.js";

const historyRoute = Router()

historyRoute.post('/create',createTranslatorHistory)

historyRoute.get('/get/',getTranslatorHistory)

export {historyRoute}