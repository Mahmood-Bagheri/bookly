import __API_URLS__ from "constants/apiUrls";
import { useMutation } from "react-query";
import apiService from "services/api/apiService";

type CreateBookTypes = {};

export const createBook = (data: CreateBookTypes) => {
    return apiService.post(__API_URLS__.book, data);
};

export const useCreateBook = () => useMutation(createBook);
