import { useMutation } from "react-query";
import API_URLS from "constants/apiUrls";
import apiService from "services/api/apiService";
import { message } from "antd";

type DeleteBookType = {
    bookId: string;
};

export const deleteBook = ({ bookId }: DeleteBookType) =>
    apiService.delete(API_URLS.book, { params: bookId });

export const useDeleteBook = () =>
    useMutation(deleteBook, {
        onMutate: selectedBook => {},
        onSuccess: newComment => {
            message.success(`کتاب با موفقیت حذف شد`);
        },
    });
