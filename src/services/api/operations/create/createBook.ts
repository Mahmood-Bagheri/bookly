import __API_URLS__ from "constants/apiUrls";
import apiService from "services/api/apiService";

type CreateBookTypes = {};
export const createBook = (data: CreateBookTypes) =>
    apiService.post(__API_URLS__.book, data);
