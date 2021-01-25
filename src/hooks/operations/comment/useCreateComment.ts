import { MutateConfig, useMutation } from "react-query";
import apiService, { ApiServiceError } from "services/api/apiService";
import API_URLS from "constants/apiUrls";
import API_RESPONSE_MESSAGES from "constants/apiResponseMessages";
/* helpers */
import * as notice from "helpers/notice";
import { Comment } from "types/comment";

export const createComment = (data: Comment.Create.Variables) => {
    return apiService.post<unknown, Comment.Base>(API_URLS.comments, data);
};

export const useCreateComment = (
    config?: MutateConfig<Comment.Base, ApiServiceError>
) =>
    useMutation(createComment, {
        onSuccess: () => {
            notice.success(API_RESPONSE_MESSAGES.comment.create.success);
        },
        onError: () => {
            notice.error(API_RESPONSE_MESSAGES.comment.create.error);
        },
        ...config,
    });
