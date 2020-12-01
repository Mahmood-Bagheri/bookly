import { useQuery } from "react-query";
import API_URLS from "constants/apiUrls";
import apiService from "services/api/apiService";

export const readPublisher = async (_: unknown, publisherId: string) => {
    const { data } = await apiService.get(API_URLS.publisher, {
        params: { publisherId },
    });
    return data;
};

export const useSinglePublisher = (publisherId: string) => {
    return useQuery([API_URLS.publisher, publisherId], readPublisher);
};
