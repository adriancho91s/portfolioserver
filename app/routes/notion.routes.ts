import express from "express";
import { Project, ProjectData } from "@customTypes/notionTypes.ts";

import notion from "@controllers/notionController.ts";

const notionRouter = express.Router();

notionRouter.get("/", (req, res) => {
  res.json({
    msg: "Notion API integration",
  });
});

notionRouter.get("/projects", async (req, res) => {
  try {
    const databaseId = process.env.NOTION_PROJECTS_DATABASE_ID;
    const response = await notion.databases.query({
      database_id: databaseId!,
    });

    console.log(response.results[0]);

    const projects = response.results.map((project) => {
      const {
        id,
        properties: {
          description,
          cover,
          category,
          colorCard,
          title,
          gitHubURL,
        },
      } = project as unknown as Project;

      const projectData: ProjectData = {
        id,
        title: title.title[0]?.plain_text || "Untitled",
        githubUrl: gitHubURL.rich_text[0]?.plain_text || "",
        description: description.rich_text[0]?.plain_text || "",
        coverUrl: (cover && cover.files[0]?.file.url) || "",
        categories:
          category.multi_select || ([] as unknown as ProjectData["categories"]),
        colorCard: colorCard.rich_text[0]?.plain_text || "",
      };

      return projectData;
    });

    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

export default notionRouter;
