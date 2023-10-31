import express from "express";
import { characters, deleteCharacter, editCharacter, newCharacter, singleCharacter } from "../controllers/charactersController.js";

const route = express.Router();

route.get("/", characters);
route.post("/1/:firstName", singleCharacter);
route.post("/2", newCharacter);
route.patch("/3", editCharacter);
route.delete("/4", deleteCharacter);

export default route;