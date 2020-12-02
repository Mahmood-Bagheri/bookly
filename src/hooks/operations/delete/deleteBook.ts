import { useMutation } from "react-query";
import API_URLS from "constants/apiUrls";
import apiService from "services/api/apiService";
import { API_RESPONSE_MESSAGES } from "constants/apiResponseMessages";
import * as notice from "helpers/notice";

type DeleteBookMutationVariables = {
    bookId: string;
};

export const deleteBook = ({ bookId }: DeleteBookMutationVariables) =>
    apiService.delete(API_URLS.book, { params: bookId });

export const useDeleteBook = () =>
    useMutation(deleteBook, {
        onMutate: selectedBook => {},
        onError: () => {
            notice.error(API_RESPONSE_MESSAGES.book.delete.error);
        },
        onSuccess: newComment => {
            notice.success(API_RESPONSE_MESSAGES.book.delete.success);
        },
    });
