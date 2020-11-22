import { useMutation } from "react-query";
import apiService from "services/api/apiService";
import __API_URLS__ from "constants/apiUrls";
import { message } from "antd";

type CreateCommentMutationTypes = {
    bookId: string;
    comment: string;
};

export const createComment = ({
    bookId,
    comment,
}: CreateCommentMutationTypes) => {
    return apiService.post(__API_URLS__.comment, { bookId, comment });
};

export const useCreateComment = () => {
    return useMutation(createComment, {
        onSuccess: newComment => {
            message.success(`نظر شما با موفقیت ثبت شد`);
        },
    });
};
