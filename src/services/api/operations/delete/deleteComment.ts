import apiService from "services/api/apiService";
import __API_URLS__ from "constants/apiUrls";

export const deleteComment = (commentId: string) => {
    return apiService.delete(__API_URLS__.comment, { params: { commentId } });
};
