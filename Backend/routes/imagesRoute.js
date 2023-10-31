import express from "express";
import { charImage } from "../controllers/imagesController.js";

const route = express.Router();

route.get("/:charName", charImage);

export default route;