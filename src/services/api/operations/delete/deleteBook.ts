import __API_URLS__ from "constants/apiUrls";
import apiService from "services/api/apiService";

type DeleteBookType = {};
export const deleteBook = (data: DeleteBookType) =>
    apiService.delete(__API_URLS__.book, data);
