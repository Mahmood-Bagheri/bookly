/* modules */
import { useMutation } from "react-query";
/* constants */
import API_URLS from "constants/apiUrls";
import API_RESPONSE_MESSAGES from "constants/apiResponseMessages";
/* service */
import apiService, { ApiServiceError } from "services/api/apiService";
/* helpers */
import * as notice from "helpers/notice";
/* types */
import { Book } from "types/book";

export const deleteBook = async ({
    bookId,
}: Book.Mutation.Delete.Variables) => {
    const { data } = await apiService.delete<Book.Mutation.Delete.Result>(
        API_URLS.book,
        { params: bookId }
    );
    return data;
};

export const useDeleteBook = () => {
    return useMutation<
        Book.Mutation.Delete.Result,
        ApiServiceError,
        Book.Mutation.Delete.Variables
    >(deleteBook, {
        onMutate: deletedBook => {},
        onError: err => {
            notice.error(API_RESPONSE_MESSAGES.book.delete.error);
        },
        onSuccess: newComment => {
            notice.success(API_RESPONSE_MESSAGES.book.delete.success);
        },
    });
};
