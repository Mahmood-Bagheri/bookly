import apiService from 'services/api/apiService';
import API_URLS from 'constants/apiUrls';
import { useMutation } from 'react-query';
import API_RESPONSE_MESSAGES from 'constants/apiResponseMessages';
import * as notice from 'helpers/notice';

export type DeleteUserMutationVariables = {
    userId: string;
};
export const deleteUser = ({ userId }: DeleteUserMutationVariables) => {
    return apiService.delete(API_URLS.user, { params: { userId } });
};

export const useDeleteUser = () =>
    useMutation(deleteUser, {
        onSuccess: () => {
            notice.success(API_RESPONSE_MESSAGES.user.delete.success);
        },
        onError: () => {
            notice.error(API_RESPONSE_MESSAGES.user.delete.error);
        },
    });
