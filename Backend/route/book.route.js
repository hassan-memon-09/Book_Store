import express from "express";
import { getBook } from "../controller/book.controller.js";
import { getFreeBook } from "../controller/book.controller.js";

const router = express.Router();

router.get("/", getBook);
router.get('/free', getFreeBook);

export default router;