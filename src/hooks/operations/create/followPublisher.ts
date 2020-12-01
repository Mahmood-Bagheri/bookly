import { message } from "antd";
import { API_RESPONSE_MESSAGES } from "constants/apiResponseMessages";
import API_URLS from "constants/apiUrls";
import { useMutation } from "react-query";
import apiService from "services/api/apiService";

type FollowPublisherTypes = {
    publisherId: string;
};

export const followPublisher = (data: FollowPublisherTypes) => {
    return apiService.post(API_URLS.followPublisher, data);
};

export const useFollowPublisher = () =>
    useMutation(followPublisher, {
        onSuccess: newComment => {
            message.success(API_RESPONSE_MESSAGES.publisher.follow.success);
        },
        onError: () => {
            message.error(API_RESPONSE_MESSAGES.publisher.follow.error);
        },
    });
