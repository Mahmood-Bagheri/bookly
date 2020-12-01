import { useMutation } from "react-query";
import apiService from "services/api/apiService";
import { message } from "antd";
import API_URLS from "constants/apiUrls";
import { API_RESPONSE_MESSAGES } from "constants/apiResponseMessages";

type LikeBookTypes = {
    bookId: string;
    likeState: boolean;
};

export const likeBook = ({ bookId, likeState }: LikeBookTypes) => {
    return apiService.patch(API_URLS.like, { bookId, likeState });
};

export const useLikeBook = () =>
    useMutation(likeBook, {
        onError: () => {
            message.error(API_RESPONSE_MESSAGES.book.like.error);
        },
    });
