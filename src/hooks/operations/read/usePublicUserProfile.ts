import { useQuery } from "react-query";
import API_URLS from "constants/apiUrls";
import apiService, { AxiosRequestConfig } from "services/api/apiService";

export const readPublicUserProfile = async (_: unknown, userId: string) => {
    const requestConfig: AxiosRequestConfig = {
        params: { userId },
    };
    const { data } = await apiService.get(API_URLS.profile, requestConfig);
    return data;
};

export const usePublicUserProfile = (userId: string) => {
    return useQuery([API_URLS.profile, userId], readPublicUserProfile);
};
