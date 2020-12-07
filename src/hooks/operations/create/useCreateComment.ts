import { useMutation } from "react-query";
import apiService from "services/api/apiService";
import API_URLS from "constants/apiUrls";
import API_RESPONSE_MESSAGES from "constants/apiResponseMessages";
/* helpers */
import * as notice from "helpers/notice";

type CreateCommentMutationVariables = {
    bookId: string;
    comment: string;
};

export const createComment = ({
    bookId,
    comment,
}: CreateCommentMutationVariables) => {
    return apiService.post(API_URLS.comments, { bookId, comment });
};

export const useCreateComment = () =>
    useMutation(createComment, {
        onSuccess: () => {
            notice.success(API_RESPONSE_MESSAGES.comment.create.success);
        },
        onError: () => {
            notice.error(API_RESPONSE_MESSAGES.comment.create.error);
        },
    });
