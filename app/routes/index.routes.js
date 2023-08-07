import express  from "express";
import spotifyRouter from "./spotify.routes.js";
import notionRouter from "./notion.routes.js";

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Welcome to Adrián API');
    });

router.use('/spotify', spotifyRouter);

router.use('/notion', notionRouter)

export default router;