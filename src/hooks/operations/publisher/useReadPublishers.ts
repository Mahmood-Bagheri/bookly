import { useQuery } from "react-query";
import API_URLS from "constants/apiUrls";
import apiService from "services/api/apiService";
import { Publisher } from "components/Publisher";

export const readPublishers = async () => {
    const { data } = await apiService.get(API_URLS.publishers);
    return data;
};

export const usePublishers = () => {
    return useQuery<Publisher[]>(API_URLS.publishers, readPublishers);
};
