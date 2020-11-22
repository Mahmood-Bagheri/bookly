import { useMutation } from "react-query";
import __API_URLS__ from "constants/apiUrls";
import apiService from "services/api/apiService";

type RegisterCredentialsType = {
    username: string;
    password: string;
};

export const register = (data: RegisterCredentialsType) => {
    return apiService.post(__API_URLS__.register, data);
};

export const useRegister = () => useMutation(register);
