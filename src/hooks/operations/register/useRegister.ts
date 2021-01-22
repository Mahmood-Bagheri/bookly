import { useMutation } from "react-query";
import API_URLS from "constants/apiUrls";
import apiService from "services/api/apiService";
import * as notice from "helpers/notice";
import API_RESPONSE_MESSAGES from "constants/apiResponseMessages";

export type RegisterMutationVariables = {
    username: string;
    password: string;
    name: string;
};

export const register = (credentials: RegisterMutationVariables) => {
    return apiService.post(API_URLS.register, credentials);
};

export const useRegister = () =>
    useMutation(register, {
        onSuccess: () => {
            notice.success(API_RESPONSE_MESSAGES.register.success);
        },
        onError: () => {
            notice.error(API_RESPONSE_MESSAGES.register.error);
        },
    });
