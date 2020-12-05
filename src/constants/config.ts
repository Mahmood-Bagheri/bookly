import { routeTo } from "helpers/routeTo";
import { ROUTES } from "./routes";

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
