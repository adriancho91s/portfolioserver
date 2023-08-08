import express, { response } from "express";

import notion from "../controllers/notionController.js";

const notionRouter = express.Router();



notionRouter.get("/", (req, res) => {
    res.send("Notion API integration");
});

notionRouter.get("/projects", async (req, res) => {
    try {
        const databaseId = process.env.NOTION_PROJECTS_DATABASE_ID;
        const response = await notion.databases.query({
            database_id: databaseId,
        });

        const projects = response.results.map((project) => {
            const {
                id,
                properties: {
                    description,
                    cover,
                    category,
                    colorCard,
                    title,
                },
                url,
            } = project;

            const projectData = {
                id,
                title: title.title[0]?.plain_text || "Untitled",
                url,
            };

            if (description.rich_text.length > 0) {
                projectData.description = description.rich_text[0].plain_text;
            }

            if (cover && cover.files.length > 0) {
                projectData.coverUrl = cover.files[0].file.url;
            }

            if (category.multi_select.length > 0) {
                projectData.categories = category.multi_select.map((option) => option.name);
            }

            if (colorCard.rich_text.length > 0) {
                projectData.colorCard = colorCard.rich_text[0].plain_text;
            }

            return projectData;
        }).filter(project => project.description || project.coverUrl || project.categories || project.colorCard);

        res.json(projects);
    } catch (error) {
        console.error("Error fetching projects:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});


export default notionRouter;