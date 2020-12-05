import { useMutation } from "react-query";
import API_URLS from "constants/apiUrls";
import apiService from "services/api/apiService";
import * as notice from "helpers/notice";
import API_RESPONSE_MESSAGES from "constants/apiResponseMessages";

export type LoginMutationVariables = {
    username: string;
    password: string;
};

export const login = (credentials: LoginMutationVariables) => {
    return apiService.post(API_URLS.login, credentials);
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
