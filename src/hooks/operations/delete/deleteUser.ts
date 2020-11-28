import apiService from "services/api/apiService";
import API_URLS from "constants/apiUrls";
import { useMutation } from "react-query";
import { message } from "antd";

export const deleteUser = ({ userId }: { userId: string }) => {
    return apiService.delete(API_URLS.user, { params: { userId } });
};

export const useDeleteUser = () =>
    useMutation(deleteUser, {
        onSuccess: () => {
            message.success(`کاربر با موفقیت حذف شد!`);
        },
        onError: () => {
            message.error(`مشکلی در حذف کردن کاربر پیش آمد!`);
        },
    });
