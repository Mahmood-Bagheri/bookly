import apiService from "services/api/apiService";
import API_URLS from "constants/apiUrls";
import { useMutation } from "react-query";
import { message } from "antd";

export const deleteComment = ({ commentId }: { commentId: string }) => {
    return apiService.delete(API_URLS.comment, { params: { commentId } });
};

export const useDeleteComment = () =>
    useMutation(deleteComment, {
        onSuccess: () => {
            message.success(`نظر با موفقت حذف شد!`);
        },
        onError: () => {
            message.error(`مشکلی در حذف کردن نظر پیش آمد!`);
        },
    });
