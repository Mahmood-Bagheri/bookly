/* constants */
import API_URLS from "constants/apiUrls";
import API_RESPONSE_MESSAGES from "constants/apiResponseMessages";
/* modules */
import { useMutation } from "react-query";
/* helpers */
import * as notice from "helpers/notice";
/* services */
import apiService from "services/api/apiService";

export const createBook = (data: Book.CreateBookVariables) => {
    return apiService.post(API_URLS.book, data);
};

export const useCreateBook = () =>
    useMutation(createBook, {
        onSuccess: (_, newBook) => {
            /* update cache and push new data to books */
            notice.success(API_RESPONSE_MESSAGES.book.create.success);
        },
        onError: () => {
            notice.error(API_RESPONSE_MESSAGES.book.create.error);
        },
    });
