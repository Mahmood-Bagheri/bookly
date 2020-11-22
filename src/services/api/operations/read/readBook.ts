import { useQuery } from "react-query";
import API_URLS from "constants/apiUrls";
import apiService from "services/api/apiService";

export const readBook = async (_: unknown, bookId: string) => {
    const { data } = await apiService.get(API_URLS.book, {
        params: { bookId },
    });
    return data;
};

export const useSingleBook = (bookId: string) => {
    return useQuery([API_URLS.book, bookId], readBook);
};
