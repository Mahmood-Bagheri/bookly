import { useMutation } from "react-query";
import apiService from "services/api/apiService";
import __API_URLS__ from "constants/apiUrls";

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

export const useCreateComment = () => useMutation(createComment);
