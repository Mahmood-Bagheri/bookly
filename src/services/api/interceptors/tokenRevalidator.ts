import { AxiosInstance, AxiosResponse, AxiosError } from "axios";
import { API_STATUS_CODES } from "constants/statusCodes";

export const applyAccessTokenRevalidator = (instance: AxiosInstance) => {
    return instance.interceptors.response.use(
        (res: AxiosResponse) => res,
        (error: AxiosError) => {
            if (error.response) {
                if (
                    error?.response?.status ===
                    API_STATUS_CODES.UNAUTHORIZED_STATUS_CODE
                ) {
                    // * make an api call to revalidate token
                }
            }

            return Promise.reject(error);
        }
    );
};
