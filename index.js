import express from "express";
import router from "./app/routes/index.routes.js";


const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json());

// Routes
app.use('/api', router);

app.get('/', (req, res) => {
    res.send('API is running...');
    } 
);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});