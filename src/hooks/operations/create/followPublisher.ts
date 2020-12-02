import { message } from "antd";
import { API_RESPONSE_MESSAGES } from "constants/apiResponseMessages";
import API_URLS from "constants/apiUrls";
import { useMutation } from "react-query";
import apiService from "services/api/apiService";
/* helpers */
import * as notice from "helpers/notice";
interface FollowPublisherMutationVariables {
    publisherId: string;
}
export const followPublisher = ({
    publisherId,
}: FollowPublisherMutationVariables) => {
    return apiService.post(API_URLS.followPublisher, { publisherId });
};

export const useFollowPublisher = () =>
    useMutation(followPublisher, {
        onSuccess: newComment => {
            notice.success(API_RESPONSE_MESSAGES.publisher.follow.success);
        },
        onError: () => {
            notice.error(API_RESPONSE_MESSAGES.publisher.follow.error);
        },
    });
