import { message } from "antd";
import { API_RESPONSE_MESSAGES } from "constants/apiResponseMessages";
import API_URLS from "constants/apiUrls";
import { useMutation } from "react-query";
import apiService from "services/api/apiService";

type CreateBookTypes = {};

export const createBook = (data: CreateBookTypes) => {
    return apiService.post(API_URLS.book, data);
};

export const useCreateBook = () =>
    useMutation(createBook, {
        onSuccess: newBook => {
            message.success(API_RESPONSE_MESSAGES.book.create.success);
        },
        onError: () => {
            message.error(API_RESPONSE_MESSAGES.book.create.error);
        },
    });
