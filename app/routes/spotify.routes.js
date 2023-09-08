import express from "express";
import getAccessToken from "../controllers/spotifyController.js";

const spotifyRouter = express.Router();


spotifyRouter.get("/token", async (req, res) => {
    const token = {
        token: await getAccessToken()
    };
    res.json(token);
});

export default spotifyRouter;