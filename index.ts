import express from "express";
import router from "./app/routes/index.routes.js";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use("/api", router);

    // app.use((req, res) => {
    //     res.status(404).send("404 Not Found, sorry! :(");
    // });

app.get("/", (req, res) => {
    res.send(`
    <head>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Signika+Negative:wght@300;400;500;600;700&display=swap" rel="stylesheet">
        <title>Adrian Gaitán API Rest</title>
    </head>
    <style>
        body {
            background-color: #1d1d1d;
            color: #fff;
            color-scheme: dark;
            text-align: center;
            font-family: "Signika Negative", sans-serif;
            min-height: 100%;
            display: flex;
            flex-direction: column;
        }

        header {
            background-color: #000;
            padding: 1rem;
        }
        nav ul {
            list-style: none;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        nav ul li {
            margin: 0 1rem;
        }
        nav ul li a {
            text-decoration: none;
            color: #fff;
            font-size: 1.5rem;
        }
        nav ul li a:hover {
            color: #e50914;
        }
        nav ul li a:active {
            color: #fff;
        }

        //Nav responsive
        @media screen and (max-width: 768px) {
            nav ul {
                flex-direction: column;
            }
            nav ul li {
                margin: 1rem 0;
            }
        }

        p {
            font-size: 1rem;
            line-height: 1.5;
        }

        section {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        a {
            text-decoration: none;

        }

        a:hover {
            color: #e50914;
        }

        a:active {
            color: #fff;
        }

    </style>
    <body>
        <header>
            <nav>   
                <ul>
                    <li><a href="/api">API</a></li>
                    <li><a href="/api/notion">Notion</a></li>
                    <li><a href="api/spotify">Spotify</a></li>
                </ul>
            </nav>
        </header>
        <section>
            <h1 style="weigth: 600;">Adrian Gaitán API Rest</h1>
            <p>Hello world!, this is my personal API to connect my portfolio with Notion and Spotify services.</p>
            <br/>
            <h2 style="weigth: 600;">Take a look at my GitHub and my Instagram!</h2>
            <div style="display: flex; justify-content: center; align-items: center; flex-direction: row;">
                <a href="https://github.com/adriancho91s/" target="_blank">
                    <iconify-icon icon="mdi:github" width="50px" style="color: white;"></iconify-icon>
                </a>
                <a href="https://www.instagram.com/adriancho91s/" target="_blank">
                    <iconify-icon icon="mdi:instagram" style="color: white;" width="50px"></iconify-icon>
                </a>
            <div/>
        </section>
        <footer>
            <p>API Rest by 
            <a href="https://github.com/adriancho91s/" target="_blank" >Adrian Gaitán</a>
            2024®</p>
        </footer>
        
    </body>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>
    `);
    } 
);

app.listen(PORT, () => {
    console.log(`Portfolio API is running on port ${PORT}.`);
});