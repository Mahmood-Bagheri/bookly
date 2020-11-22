import { useQuery } from "react-query";
import __API_URLS__ from "constants/apiUrls";
import apiService from "services/api/apiService";

export const readBook = async (_: unknown, bookId: string) => {
    const { data } = await apiService.get(__API_URLS__.book, {
        params: { bookId },
    });
    return data;
};

export const useSingleBook = (bookId: string) => {
    return useQuery([__API_URLS__.book, bookId], readBook);
};
