import { useQuery } from "react-query";
import API_URLS from "constants/apiUrls";
import apiService from "services/api/apiService";

export const readProfile = async () => {
    const { data } = await apiService.get(API_URLS.profile);
    return data;
};

export const useProfile = () => {
    return useQuery(API_URLS.profile, readProfile);
};
