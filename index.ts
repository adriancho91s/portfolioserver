import express from "express";
import router from "./app/routes/index.routes.js";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use('/api', router);

app.get('/', (req, res) => {
    res.send('Hello world!, this is my personal API');
    } 
);

app.listen(PORT, () => {
    console.log(`Portfolio API is running on port ${PORT}.`);
});