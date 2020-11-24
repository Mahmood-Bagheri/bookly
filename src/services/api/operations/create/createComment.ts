import { message } from "antd";
import { useMutation } from "react-query";
import apiService from "services/api/apiService";
import API_URLS from "constants/apiUrls";

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
            message.success(`نظر شما با موفقیت ثبت شد`);
        },
        onError: () => {
            message.error(`مشکلی در ثبت کردن نظر پیش آمد!`);
        },
    });
