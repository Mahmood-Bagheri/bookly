import { useQuery } from "react-query";
import API_URLS from "constants/apiUrls";
import apiService, { AxiosRequestConfig } from "services/api/apiService";

export const readBook = async (_: unknown, bookId: string) => {
    const { data } = await apiService.get(`${API_URLS.book}/${bookId}`);
    return data;
};

export const useSingleBook = (bookId: string) => {
    return useQuery<Book.Query.Result>([API_URLS.book, bookId], () =>
        readBook(undefined, bookId)
    );
};
