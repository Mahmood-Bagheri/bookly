import { useMutation } from "react-query";
import API_URLS from "constants/apiUrls";
import apiService from "services/api/apiService";
import { queryCache } from "services/react-query/reactQueryService";

export const deleteCategory = async (categoryId: string) => {
    const { data } = await apiService.delete(
        `${API_URLS.category}/${categoryId}`
    );
    return data;
};

export const useDeleteCategory = () =>
    useMutation(deleteCategory, {
        onMutate: categoryId => {
            const categories:
                | Category.Query.Result[]
                | undefined = queryCache.getQueryData(API_URLS.categories);
            const newCategories = categories?.filter(
                item => item._id !== categoryId
            );
            queryCache.setQueryData(API_URLS.categories, newCategories);
        },
        onSuccess: () => {
            queryCache.refetchQueries(API_URLS.categories);
        },
    });
