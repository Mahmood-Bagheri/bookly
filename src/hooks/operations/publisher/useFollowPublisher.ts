import API_RESPONSE_MESSAGES from "constants/apiResponseMessages";
import API_URLS from "constants/apiUrls";
import { useMutation } from "react-query";
import apiService from "services/api/apiService";
/* helpers */
import * as notice from "helpers/notice";

type FollowPublisherMutationVariables = {
    publisherId: string;
};
export const followPublisher = (data: FollowPublisherMutationVariables) => {
    return apiService.post(`${API_URLS.followPublisher}/${data.publisherId}`);
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

export const unfollowPublisher = (data: FollowPublisherMutationVariables) => {
    return apiService.post(`${API_URLS.unfollowPublisher}/${data.publisherId}`);
};

export const useUnfollowPublisher = () =>
    useMutation(followPublisher, {
        onSuccess: newComment => {
            notice.success(API_RESPONSE_MESSAGES.publisher.unfollow.success);
        },
        onError: () => {
            notice.error(API_RESPONSE_MESSAGES.publisher.unfollow.error);
        },
    });
