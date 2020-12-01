import { message } from "antd";
import { useMutation } from "react-query";
import apiService from "services/api/apiService";
import API_URLS from "constants/apiUrls";
import { API_RESPONSE_MESSAGES } from "constants/apiResponseMessages";

type CreateCommentMutationTypes = {
    bookId: string;
    comment: string;
};

export const createComment = (comment: CreateCommentMutationTypes) => {
    return apiService.post(API_URLS.comments, comment);
};

export const useCreateComment = () =>
    useMutation(createComment, {
        onSuccess: () => {
            message.success(API_RESPONSE_MESSAGES.comment.create.success);
        },
        onError: () => {
            message.error(API_RESPONSE_MESSAGES.book.create.error);
        },
    });
