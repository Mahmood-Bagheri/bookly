import { useMutation } from "react-query";
import API_URLS from "constants/apiUrls";
import apiService from "services/api/apiService";
import { message } from "antd";
import { API_RESPONSE_MESSAGES } from "constants/apiResponseMessages";

type DeleteBookType = {
    bookId: string;
};

export const deleteBook = ({ bookId }: DeleteBookType) =>
    apiService.delete(API_URLS.book, { params: bookId });

export const useDeleteBook = () =>
    useMutation(deleteBook, {
        onMutate: selectedBook => {},
        onError: () => {
            message.error(API_RESPONSE_MESSAGES.book.delete.error);
        },
        onSuccess: newComment => {
            message.success(API_RESPONSE_MESSAGES.book.delete.success);
        },
    });
