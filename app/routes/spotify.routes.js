import express from "express";
import getAccessToken from "../controllers/spotifyController.js";
import axios from "axios";

const spotifyRouter = express.Router();

spotifyRouter.get("/", (req, res) => {
    res.send("Spotify service");
});

spotifyRouter.get("/onRepeat", async (req, res) => {
    try {
        const token = await getAccessToken();
        const responsePlaylist = await axios.get(
            "https://api.spotify.com/v1/playlists/37i9dQZF1Epjw7u5bGVGZR/",
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        res.send(responsePlaylist.data);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

export default spotifyRouter;