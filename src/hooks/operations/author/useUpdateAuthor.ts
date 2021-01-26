import { useMutation } from 'react-query';
import API_URLS from 'constants/apiUrls';
import apiService, { ApiServiceError } from 'services/api/apiService';
import { queryCache } from 'services/react-query/reactQueryService';
import * as notice from 'helpers/notice';

export const updateAuthor = async (
    _: unknown,
    authorId: string,
    name: string
) => {
    const { data } = await apiService.put(`${API_URLS.author}/${authorId}`, {
        name,
    });
    return data;
};

export const useUpdateAuthor = () =>
    useMutation<
        Category.Query.Result,
        ApiServiceError,
        { name: string; authorId: string }
    >(
        v => {
            return updateAuthor(undefined, v.authorId, v.name);
        },
        {
            onMutate: variables => {
                const previousAuthor:
                    | Author.Query.Result
                    | undefined = queryCache.getQueryData([
                    API_URLS.author,
                    variables.authorId,
                ]);

                const newAuthor: Partial<Author.Query.Result> = {
                    ...previousAuthor,
                    name: variables.name,
                };

                queryCache.setQueryData(
                    [API_URLS.category, variables.authorId],
                    newAuthor
                );

                return () =>
                    queryCache.setQueryData(
                        [API_URLS.author, variables.authorId],
                        previousAuthor
                    );
            },
            onSuccess: () => {
                queryCache.refetchQueries(API_URLS.author);
                notice.success('نویسنده با موفقیت به روزرسانی شد');
            },
        }
    );
