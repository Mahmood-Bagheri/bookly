import { useMutation } from "react-query";
import API_URLS from "constants/apiUrls";
import apiService from "services/api/apiService";

type RegisterMutationVariables = {
    username: string;
    password: string;
};

export const register = (credentials: RegisterMutationVariables) => {
    return apiService.post(API_URLS.register, credentials);
};

export const useRegister = () => useMutation(register);
