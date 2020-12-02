import { useMutation } from "react-query";
/* services */
import apiService, { ApiServiceError } from "services/api/apiService";
/* constants */
import API_URLS from "constants/apiUrls";
import API_RESPONSE_MESSAGES from "constants/apiResponseMessages";
import * as notice from "helpers/notice";
/* types */
import { Book } from "types/book";

export const likeBook = (data: Book.Mutation.Like.Variables) => {
    return apiService.patch(API_URLS.like, data);
};

export const useLikeBook = () => {
    return useMutation<
        Book.Mutation.Like.Result,
        ApiServiceError,
        Book.Mutation.Like.Variables
    >(likeBook, {
        onSuccess: (_, variables) => {},
        onError: () => {
            notice.error(API_RESPONSE_MESSAGES.book.like.error);
        },
    });
};
