import { useMutation } from "react-query";
import __API_URLS__ from "constants/apiUrls";
import apiService from "services/api/apiService";

type LoginCredentialsType = {
    username: string;
    password: string;
};

export const login = (data: LoginCredentialsType) => {
    return apiService.post(__API_URLS__.login, data);
};

export const useLogin = () => useMutation(login);
