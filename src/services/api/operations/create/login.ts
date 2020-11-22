import { useMutation } from "react-query";
import API_URLS from "constants/apiUrls";
import apiService from "services/api/apiService";

type LoginCredentialsType = {
    username: string;
    password: string;
};

export const login = (credentials: LoginCredentialsType) => {
    return apiService.post(API_URLS.login, credentials);
};

export const useLogin = () => useMutation(login);
