import { QueryConfig, useQuery } from "react-query";
import API_URLS from "constants/apiUrls";
import apiService, { ApiServiceError } from "services/api/apiService";

export const readCategories = async () => {
    const { data } = await apiService.get(API_URLS.categories);
    return data;
};

export const useCategories = (
    queryConfig?: QueryConfig<Category.Query.Result[]>
) => {
    return useQuery<Category.Query.Result[]>(
        API_URLS.categories,
        readCategories,
        queryConfig
    );
};
