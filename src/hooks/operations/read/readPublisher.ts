import { useQuery } from "react-query";
import API_URLS from "constants/apiUrls";
import apiService, { AxiosRequestConfig } from "services/api/apiService";

export const readPublisher = async (_: unknown, publisherId: string) => {
    const requestConfig: AxiosRequestConfig = {
        params: { publisherId },
    };
    const { data } = await apiService.get(API_URLS.publisher, requestConfig);
    return data;
};

export const useSinglePublisher = (publisherId: string) => {
    return useQuery([API_URLS.publisher, publisherId], readPublisher);
};
