import { useQuery } from "react-query";
import API_URLS from "constants/apiUrls";
import apiService from "services/api/apiService";

export const readBooks = async () => {
    const { data } = await apiService.get(API_URLS.comments);
    return data;
};

export const useBooks = () => {
    return useQuery(API_URLS.comments, readBooks);
};
