import apiService from "services/api/apiService";
import __API_URLS__ from "constants/apiUrls";
import { useMutation } from "react-query";
import { message } from "antd";

export const deleteComment = ({ commentId }: { commentId: string }) => {
    return apiService.delete(__API_URLS__.comment, { params: { commentId } });
};

export const useDeleteComment = () =>
    useMutation(deleteComment, {
        onSuccess: newComment => {
            message.success(`نظر با موفقت حذف شد!`);
        },
    });
