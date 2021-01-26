import { useMutation } from 'react-query';
import API_URLS from 'constants/apiUrls';
import apiService, { ApiServiceError } from 'services/api/apiService';
import * as notice from 'helpers/notice';
import API_RESPONSE_MESSAGES from 'constants/apiResponseMessages';

export type RegisterMutationVariables = {
    name: string;
    email: string;
    password: string;
};

export const register = async (credentials: RegisterMutationVariables) => {
    const { data } = await apiService.post(API_URLS.register, credentials);
    return data;
};

export const useRegister = () =>
    useMutation(register, {
        onSuccess: () => {
            notice.success(API_RESPONSE_MESSAGES.register.success);
        },
        onError: (err: ApiServiceError) => {
            err.response?.data.message.map(message => {
                notice.error(message);
            });
        },
    });
