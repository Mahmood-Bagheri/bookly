import { message } from "antd";
import API_URLS from "constants/apiUrls";
import { useMutation } from "react-query";
import apiService from "services/api/apiService";

type CreateBookTypes = {};

export const createBook = (data: CreateBookTypes) => {
    return apiService.post(API_URLS.book, data);
};

export const useCreateBook = () =>
    useMutation(createBook, {
        onSuccess: newComment => {
            message.success(`کتاب شما با موفقیت ثبت شد`);
        },
        onError: () => {
            message.error(`مشکلی در ثبت کردن کتاب پیش آمد!`);
        },
    });
