import { AxiosError } from "axios";

declare module "axios" {
    interface ServerError {
        message: object;
    }
    interface ApiServiceError extends AxiosError<ServerError> {}
}
