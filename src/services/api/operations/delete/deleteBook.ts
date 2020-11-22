import { useMutation } from "react-query";
import __API_URLS__ from "constants/apiUrls";
import apiService from "services/api/apiService";
import { message } from "antd";

type DeleteBookType = {};

export const deleteBook = (data: DeleteBookType) =>
    apiService.delete(__API_URLS__.book, data);

export const useDeleteBook = () =>
    useMutation(deleteBook, {
        onMutate: selectedBook => {},
        onSuccess: newComment => {
            message.success(`کتاب با موفقیت حذف شد`);
        },
    });
