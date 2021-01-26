import { useMutation } from 'react-query';
import API_URLS from 'constants/apiUrls';
import apiService from 'services/api/apiService';
import * as notice from 'helpers/notice';
import API_RESPONSE_MESSAGES from 'constants/apiResponseMessages';

export type LoginMutationVariables = {
    username: string;
    password: string;
};

export const login = async (credentials: LoginMutationVariables) => {
    try {
        const { data } = await apiService.post(API_URLS.login, credentials);
        return data;
    } catch (error) {
        throw error;
    }
};

export const useLogin = () =>
    useMutation(login, {
        onSuccess: () => {
            notice.success(API_RESPONSE_MESSAGES.login.success);
        },
        onError: () => {
            notice.error(API_RESPONSE_MESSAGES.login.error);
        },
    });
