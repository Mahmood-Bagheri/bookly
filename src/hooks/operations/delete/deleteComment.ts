import apiService from "services/api/apiService";
import API_URLS from "constants/apiUrls";
import { useMutation } from "react-query";
import { message } from "antd";
import { API_RESPONSE_MESSAGES } from "constants/apiResponseMessages";

export const deleteComment = ({ commentId }: { commentId: string }) => {
    return apiService.delete(API_URLS.comments, { params: { commentId } });
};

export const useDeleteComment = () =>
    useMutation(deleteComment, {
        onSuccess: () => {
            message.success(API_RESPONSE_MESSAGES.comment.delete.success);
        },
        onError: () => {
            message.error(API_RESPONSE_MESSAGES.comment.delete.error);
        },
    });
