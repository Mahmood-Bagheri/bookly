import { useQuery } from "react-query";
import API_URLS from "constants/apiUrls";
import apiService, { AxiosRequestConfig } from "services/api/apiService";

export const readCategoryBooks = async (_: unknown, categoryId: string) => {
    const { data } = await apiService.get(`${API_URLS.category}/${categoryId}`);
    return data;
};

export const useCategoryBooks = (categoryId: string) => {
    return useQuery<Category.Query.Result>(
        [API_URLS.category, categoryId],
        () => readCategoryBooks(undefined, categoryId)
    );
};
