import { useMutation } from "react-query";
import API_URLS from "constants/apiUrls";
import apiService, { AxiosError } from "services/api/apiService";

type RegisterCredentialsType = {
    username: string;
    password: string;
};

export const register = (credentials: RegisterCredentialsType) => {
    return apiService.post(API_URLS.register, credentials);
};

export const useRegister = () => useMutation(register);
