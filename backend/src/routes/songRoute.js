import { addSong, listSong ,removeSong} from "../controllers/songController.js"; 
import express from "express";
import upload from "../middlewares/multer.js"; 

const songRouter = express.Router();

// POST route for adding a song
songRouter.post(
  "/add",
  upload.fields([
    { name: "image", maxCount: 1 }, // Expecting one image file
    { name: "audio", maxCount: 1 }, // Expecting one audio file
  ]),
  addSong 
);

// GET route for listing songs
songRouter.get("/list", listSong); 
songRouter.post('/remove',removeSong)
export default songRouter; 