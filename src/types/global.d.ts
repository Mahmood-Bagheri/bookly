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
