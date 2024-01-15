import express from "express";
import getAccessToken from "@controllers/spotifyController.ts";
import axios from "axios";

const spotifyRouter = express.Router();

spotifyRouter.get("/", (req, res) => {
    res.send({
        msg: "Spotify service API integration"
    });
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
    } catch (error: any) {
        res.status(500).send({ error: error.message as unknown as string});
    }
});

export default spotifyRouter;