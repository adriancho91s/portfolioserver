import {
  MultiSelectPropertyItemObjectResponse,
  RichTextItemResponse,
  SelectPropertyItemObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

//Projects
export interface Project {
  id: string;
  properties: {
    description: {
      rich_text: {
        plain_text: string;
      }[];
    };
    cover: {
      files: {
        file: {
          url: string;
        };
      }[];
    };
    category: MultiSelectPropertyItemObjectResponse;
    colorCard: {
      rich_text: {
        plain_text: string;
      }[];
    };
    title: {
      title: {
        plain_text: string;
      }[];
    };
    gitHubURL: {
      id: string;
      type: string;
      rich_text: RichTextItemResponse[];
    };
  };
  url: string;
}

export interface ProjectData {
  id: string;
  title: string;
  githubUrl: string;
  description?: string;
  coverUrl?: string;
  categories?: Array<SelectPropertyItemObjectResponse["select"]>;
  colorCard?: string;
}
