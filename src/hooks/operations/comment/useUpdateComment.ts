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

type Props = {
    commentId: string;
    data: object;
};
export const updateComment = async (dto: Props) => {
    const { data } = await apiService.put(
        `${API_URLS.comments}/${dto.commentId}`,
        dto.data
    );
    return data;
};

export const useUpdateComment = () => {
    return useMutation(updateComment, {
        onSuccess: variables => {
            queryCache.refetchQueries(API_URLS.comments);
            notice.success(API_RESPONSE_MESSAGES.comment.update.success);
        },
        onError: () => {
            notice.error(API_RESPONSE_MESSAGES.comment.update.error);
        },
    });
};
