/* services */
import apiService from 'services/api/apiService';
/* constants */
import API_RESPONSE_MESSAGES from 'constants/apiResponseMessages';
import API_URLS from 'constants/apiUrls';
/* react query */
import { useMutation } from 'react-query';
import { queryCache } from 'services/react-query/reactQueryService';

/* helpers */
import * as notice from 'helpers/notice';

export const deleteComment = async (commentId: string) => {
    const { data } = await apiService.delete(
        `${API_URLS.comments}/${commentId}`
    );
    return data;
};

export const useDeleteComment = () => {
    return useMutation(deleteComment, {
        onSuccess: variables => {
            queryCache.refetchQueries(API_URLS.book);
            queryCache.refetchQueries(API_URLS.comments);
            console.log(variables);
            notice.success(API_RESPONSE_MESSAGES.comment.delete.success);
        },
        onError: () => {
            notice.error(API_RESPONSE_MESSAGES.comment.delete.error);
        },
    });
};
