import Express from "express";

const app = Express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(Express.json());

// Routes
app.use()