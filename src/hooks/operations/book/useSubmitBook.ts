/* constants */
import API_URLS from "constants/apiUrls";
import API_RESPONSE_MESSAGES from "constants/apiResponseMessages";
/* modules */
import { useMutation } from "react-query";
/* helpers */
import * as notice from "helpers/notice";
import { transformObjectToFormData } from "helpers/transformObjectToFormData";
/* services */
import apiService from "services/api/apiService";

export const submitBook = (data: Book.Mutation.Submit.Variables) => {
    const payload = transformObjectToFormData(data);
    return apiService.post(API_URLS.book, payload);
};

export const useSubmitBook = () =>
    useMutation(submitBook, {
        onSuccess: (_, newBook) => {
            /* update cache and push new data to books */
            notice.success(API_RESPONSE_MESSAGES.book.submit.success);
        },
        onError: () => {
            notice.error(API_RESPONSE_MESSAGES.book.submit.error);
        },
    });
