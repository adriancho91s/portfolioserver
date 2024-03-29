import express  from "express";
import spotifyRouter from "./spotify.routes.ts";
import notionRouter from "./notion.routes.ts";

const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        msg: "Welcome to Portfolio API, this was made by @adriancho91s"
    });
    });

router.use('/spotify', spotifyRouter);

router.use('/notion', notionRouter)

export default router;