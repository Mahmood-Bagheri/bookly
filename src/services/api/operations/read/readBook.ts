import __API_URLS__ from "constants/apiUrls";
import apiService from "services/api/apiService";

type ReadBookType = {};
export const readBook = (params: ReadBookType) =>
    apiService.get(__API_URLS__.book, { params });
