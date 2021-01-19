import { useQuery } from "react-query";
import API_URLS from "constants/apiUrls";
import apiService, { AxiosRequestConfig } from "services/api/apiService";
import { Publisher as PublisherNamespace } from "types/publisher";
export const readPublisher = async (_: unknown, publisherId: string) => {
    const requestConfig: AxiosRequestConfig = {
        params: { publisherId },
    };
    return await (await apiService.get(API_URLS.publisher, requestConfig)).data;
};

export const useSinglePublisher = (publisherId: string) => {
    return useQuery<PublisherNamespace.Query.Result>(
        [API_URLS.publisher, publisherId],
        () => readPublisher(undefined, publisherId)
    );
};
