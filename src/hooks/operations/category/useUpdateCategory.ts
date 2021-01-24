import { useMutation } from "react-query";
import API_URLS from "constants/apiUrls";
import apiService, { ApiServiceError } from "services/api/apiService";
import { queryCache } from "services/react-query/reactQueryService";
export const updateCategory = async (
    _: unknown,
    categoryId: string,
    categoryTitle: string
) => {
    const { data } = await apiService.put(
        `${API_URLS.category}/${categoryId}`,
        { title: categoryTitle }
    );
    return data;
};

export const useUpdateCategory = () =>
    useMutation<
        Category.Query.Result,
        ApiServiceError,
        { categoryTitle: string; categoryId: string }
    >(
        v => {
            return updateCategory(undefined, v.categoryId, v.categoryTitle);
        },
        {
            onMutate: variables => {
                const previousCategory:
                    | Category.Query.Result
                    | undefined = queryCache.getQueryData([
                    API_URLS.category,
                    variables.categoryId,
                ]);

                const newCategory: Partial<Category.Query.Result> = {
                    ...previousCategory,
                    title: variables.categoryTitle,
                };

                queryCache.setQueryData(
                    [API_URLS.category, variables.categoryId],
                    newCategory
                );

                return () =>
                    queryCache.setQueryData(
                        [API_URLS.category, variables.categoryId],
                        previousCategory
                    );
            },
            onSuccess: () => {
                queryCache.refetchQueries(API_URLS.categories);
            },
        }
    );
