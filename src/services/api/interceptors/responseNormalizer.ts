import { AxiosInstance } from "axios";

export const applyResponseNormalizer = (instance: AxiosInstance) => {
    return instance.interceptors.response.use(response => response);
};
