import express from "express";
import router from "./app/routes/index.routes.js";
import cors from "cors";
import dotenv from 'dotenv';
import { homePage } from "./app/utils/homePage.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

let whitelist = [process.env.CORS_ORIGIN, process.env.CORS_ORIGIN_AWS, process.env.CORS_ORIGIN_LOCAL];

app.use(cors({origin: "*", methods: "*"}));

// app.options("https://adriangaitan.engineer", cors());

// Middlewares
// app.use(express.json());

// Routes
app.use("/api", router);

app.get("/", (req, res) => {
    res.send(homePage);
    } 
);

app.listen(PORT, () => {
    console.log(`Portfolio API is running on port ${PORT}.\nlocalhost: http://localhost:${PORT}`);
});