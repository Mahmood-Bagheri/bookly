import apiService from "services/api/apiService";
import API_URLS from "constants/apiUrls";
import { useMutation } from "react-query";
import { message } from "antd";
import { API_RESPONSE_MESSAGES } from "constants/apiResponseMessages";

export const deleteUser = ({ userId }: { userId: string }) => {
    return apiService.delete(API_URLS.user, { params: { userId } });
};

export const useDeleteUser = () =>
    useMutation(deleteUser, {
        onSuccess: () => {
            message.success(API_RESPONSE_MESSAGES.user.delete.success);
        },
        onError: () => {
            message.error(API_RESPONSE_MESSAGES.user.delete.error);
        },
    });
