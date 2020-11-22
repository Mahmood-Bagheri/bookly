import apiService from "services/api/apiService";
import __API_URLS__ from "constants/apiUrls";

export const createComment = (bookId: string, comment: string) => {
    return apiService.post(__API_URLS__.comment, { bookId, comment });
};
