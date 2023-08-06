import express from "express";
import token from "../controllers/spotifyController.js";

const spotifyRouter = express.Router();


spotifyRouter.get("/token", async (req, res) => {
    res.json(token);
});

export default spotifyRouter;