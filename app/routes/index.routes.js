import express  from "express";
import spotifyRouter from "./spotify.routes.js";

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Welcome to Adrián API');
    });

router.use('/spotify', spotifyRouter);


export default router;