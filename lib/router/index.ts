
import express from "express";
import { Riders } from "./controllers";

const router = express.Router();

router.get('/all-riders', Riders.all)


export default router;