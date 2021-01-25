/* modules */
import { useMutation } from "react-query";
/* constants */
import API_URLS from "constants/apiUrls";
import API_RESPONSE_MESSAGES from "constants/apiResponseMessages";
/* service */
import apiService, { ApiServiceError } from "services/api/apiService";
/* helpers */
import * as notice from "helpers/notice";
import { queryCache } from "services/react-query/reactQueryService";

export const deleteBook = async ({
    bookId,
}: Book.Mutation.Delete.Variables) => {
    const { data } = await apiService.delete(`${API_URLS.book}/${bookId}`);
    return data;
};

export const useDeleteBook = () => {
    return useMutation<
        Book.Mutation.Delete.Result,
        ApiServiceError,
        Book.Mutation.Delete.Variables
    >(deleteBook, {
        onMutate: ({ bookId }) => {
            const books:
                | Book.Query.Result[]
                | undefined = queryCache.getQueryData(API_URLS.book);
            const newBooks = books?.filter(book => book._id !== bookId);
            queryCache.setQueryData(API_URLS.book, newBooks);
        },
        onError: err => {
            notice.error(API_RESPONSE_MESSAGES.book.delete.error);
        },
        onSuccess: () => {
            notice.success(API_RESPONSE_MESSAGES.book.delete.success);
        },
    });
};
