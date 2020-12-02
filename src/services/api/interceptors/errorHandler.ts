import { AxiosInstance, AxiosResponse, AxiosError } from "axios";

// todo -> make somthing to handle errors globally
export const applyErrorHandler = (instance: AxiosInstance) => {
    // Add a response interceptor
    return instance.interceptors.response.use(
        (res: AxiosResponse) => res,
        (error: AxiosError) => {
            return Promise.reject(error);
        }
    );
};
