import { AxiosRequestConfig, AxiosInstance } from "axios";

interface AuthRequestConfig {
    /**
     * @default true
     */
    shouldAuthenticate?: boolean;
}

declare module "axios" {
    interface AxiosRequestConfig extends AuthRequestConfig {}
}

export const applyAuthInterceptor = (instance: AxiosInstance) => {
    return instance.interceptors.request.use((config: AxiosRequestConfig) => {
        const { shouldAuthenticate = true } = config;

        if (shouldAuthenticate) {
            // * some logic to read Bearer token from localStorage
            config.headers.authorization = ``;
        }
        return config;
    });
};
