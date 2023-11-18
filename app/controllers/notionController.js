import { Client } from "@notionhq/client";
import dotenv from "dotenv";

dotenv.config();

// Initializing a NOTION client
const notion = new Client({
    auth: process.env.NOTION_TOKEN,
  })

export default notion;