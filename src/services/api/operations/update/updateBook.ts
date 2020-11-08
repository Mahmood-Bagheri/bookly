import __API_URLS__ from "constants/apiUrls";
import apiService from "services/api/apiService";

type UpdateBookTypes = {};
export const updateBook = (data: UpdateBookTypes) =>
    apiService.patch(__API_URLS__.book, data);
