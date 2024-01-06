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
        category: {
            multi_select: {
                name: string;
            }[];
        };
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
    };
    url: string;
}

// Project Data
export interface ProjectData {
    id: string;
    title: string;
    description?: string;
    coverUrl?: string;
    categories?: string[];
    colorCard?: string;
    url: string;
}