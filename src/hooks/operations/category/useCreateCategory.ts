import { useMutation } from "react-query";
import API_URLS from "constants/apiUrls";
import apiService from "services/api/apiService";
import { queryCache } from "services/react-query/reactQueryService";

export type CreateCategoryMutationVariables = {
    title: string;
};

export const createCategory = async (dto: CreateCategoryMutationVariables) => {
    const { data } = await apiService.post(API_URLS.category, dto);
    return data;
};

export const useCreateCategory = () =>
    useMutation(createCategory, {
        onSuccess: () => {
            queryCache.refetchQueries(API_URLS.categories);
        },
    });
