import { useQuery } from "react-query";
import API_URLS from "constants/apiUrls";
import apiService, { AxiosRequestConfig } from "services/api/apiService";
import { fakeApiCall } from "helpers/fakeApi";

export const readCategoryBooks = async (_: unknown, categoryId: string) => {
    const requestConfig: AxiosRequestConfig = {
        params: { categoryId },
    };
    const { data } = await apiService.get(API_URLS.category, requestConfig);
    return data;
};

export const useCategoryBooks = (categoryId: string) => {
    return useQuery([API_URLS.category, categoryId], fakeApiCall);
};
