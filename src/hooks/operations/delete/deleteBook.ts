import { useMutation } from "react-query";
import API_URLS from "constants/apiUrls";
import apiService from "services/api/apiService";
import { message } from "antd";

type DeleteBookType = {};

export const deleteBook = (data: DeleteBookType) =>
    apiService.delete(API_URLS.book, data);

export const useDeleteBook = () =>
    useMutation(deleteBook, {
        onMutate: selectedBook => {},
        onSuccess: newComment => {
            message.success(`کتاب با موفقیت حذف شد`);
        },
    });
