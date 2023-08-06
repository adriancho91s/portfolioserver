import express from "express";
import router from "./app/routes/index.routes";

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(Express.json());

// Routes
app.use('/api', router);
app.get('/', (req, res) => {
    res.send('API is running...');
    } 
);