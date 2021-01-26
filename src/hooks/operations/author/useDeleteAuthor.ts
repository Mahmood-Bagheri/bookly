/* constants */
import API_URLS from 'constants/apiUrls';
/* modules */
import { useMutation } from 'react-query';
/* services */
import { queryCache } from 'services/react-query/reactQueryService';
import apiService from 'services/api/apiService';

export const deleteAuthor = async (authorId: string) => {
    const { data } = await apiService.delete(`${API_URLS.author}/${authorId}`);
    return data;
};

export const useDeleteAuthor = () =>
    useMutation(deleteAuthor, {
        onMutate: authorId => {
            const authors:
                | Author.Query.Result[]
                | undefined = queryCache.getQueryData(API_URLS.author);

            const fileteredAuthors = authors?.filter(
                item => item._id !== authorId
            );

            queryCache.setQueryData(API_URLS.author, fileteredAuthors);
        },
        onSuccess: () => {
            // queryCache.refetchQueries(API_URLS.categories);
        },
    });
