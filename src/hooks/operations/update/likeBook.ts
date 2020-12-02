import { MutationConfig, useMutation } from "react-query";
import apiService from "services/api/apiService";
import API_URLS from "constants/apiUrls";
import { API_RESPONSE_MESSAGES } from "constants/apiResponseMessages";
import * as notice from "helpers/notice";

type LikeBookMutationVariables = {
    bookId: string;
    likeState: boolean;
};

export const likeBook = ({ bookId, likeState }: LikeBookMutationVariables) => {
    return apiService.patch(API_URLS.like, { bookId, likeState });
};

export const useLikeBook = () => {
    const mutationConfig: MutationConfig<
        unknown,
        unknown,
        LikeBookMutationVariables
    > = {
        onSuccess: (_, variables) => {},
        onError: () => {
            notice.error(API_RESPONSE_MESSAGES.book.like.error);
        },
    };
    return useMutation(likeBook, mutationConfig);
};
