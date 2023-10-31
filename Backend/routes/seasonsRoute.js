import express from "express";
import { seasons } from "../controllers/seasonsController.js";

const route = express.Router();
route.get("/", seasons);
export default route;