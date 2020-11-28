import { useMutation } from "react-query";
import API_URLS from "constants/apiUrls";
import apiService from "services/api/apiService";

type LikeBookTypes = {
    bookId: string;
    likeState: boolean;
};

export const likeBook = ({ bookId, likeState }: LikeBookTypes) => {
    return apiService.patch(API_URLS.like, { bookId, likeState });
};

export const useLikeBook = () => useMutation(likeBook);
