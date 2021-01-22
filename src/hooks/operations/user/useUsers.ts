import { useQuery } from "react-query";
import API_URLS from "constants/apiUrls";
import apiService from "services/api/apiService";

export const readUsers = async () => {
    const { data } = await apiService.get(API_URLS.user);
    return data;
};

export const useUsers = () => {
    return useQuery(API_URLS.user, readUsers);
};
