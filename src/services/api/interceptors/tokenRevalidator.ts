import { AxiosInstance, AxiosResponse, AxiosError } from "axios";

export const applyAccessTokenRevalidator = (instance: AxiosInstance) => {
    return instance.interceptors.response.use(
        (res: AxiosResponse) => res,
        (error: AxiosError) => {
            if (error.response) {
                const UNAUTHORIZED_STATUS_CODE = 401;
                if (error?.response?.status === UNAUTHORIZED_STATUS_CODE) {
                    // * make an api call to revalidate token
                }
            }

            return Promise.reject(error);
        }
    );
};
