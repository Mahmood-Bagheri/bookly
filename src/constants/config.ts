export const ENV_CONFIG = {
    isDev: process.env.NODE_ENV === "development",
    isProd: process.env.NODE_ENV === "production",
};

export const SHIMMERS_CONFIG = {
    publisherBoxCount: 12,
    bookBoxCount: 12,
    categoriesCount: 12,
    commentBoxCount: 3,
};

export const FAKE_IMAGE_API_CONFIG = {
    apiUrl: "https://picsum.photos",
    key: "book",
    size: `500`,
};

export const APP_TITLE = process.env.REACT_APP_WEBSITE_TITLE || "Bookly 📚";

export const DEFAULT_IMAGE_ALT =
    "This image is related to bookly, all rights reserved :D";
