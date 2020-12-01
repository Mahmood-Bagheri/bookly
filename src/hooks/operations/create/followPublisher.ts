import { message } from "antd";
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
            message.success(`ناشر با موفقیت فالو شد`);
        },
        onError: () => {
            message.error(`مشکلی در دنبال کردن ناشر پیش آمد!`);
        },
    });
