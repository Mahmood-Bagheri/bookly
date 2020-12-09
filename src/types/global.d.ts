import { AxiosError } from "axios";

interface ServerError {
    message: object;
}

/* customize the AxiosError object type */
declare module "axios" {
    interface ApiServiceError extends AxiosError<ServerError> {}
}

/* picks all types of a specific component */
declare type $ElementProps<T> = T extends React.ComponentType<infer Props>
    ? Props extends object
        ? Props
        : never
    : never;

declare let process: {
    env: {
        NODE_ENV: "development" | "production";
        REACT_APP_API_URL: string;
        REACT_APP_WEBSITE_TITLE: string;
    };
};

type Maybe<T> = T | undefined | null;

export type KeyboardKeys = "Enter" | "Escape";
