import { AxiosInstance, AxiosResponse, ApiServiceError } from "axios";

/* todo -> transform headers */
export const appleFormDataHeaderTransformer = (instance: AxiosInstance) => {
    // Add a response interceptor
    return instance.interceptors.request.use(config => {
        return config;
    });
};
