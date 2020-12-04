import { useQuery } from "react-query";
import API_URLS from "constants/apiUrls";
import apiService, { AxiosRequestConfig } from "services/api/apiService";

export const readBook = async (_: unknown, bookId: string) => {
    const requestConfig: AxiosRequestConfig = {
        params: { bookId },
    };
    const { data } = await apiService.get(API_URLS.book, requestConfig);
    return data;
};

export const fakeApiCall = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 3000);
    });
export const useSingleBook = (bookId: string) => {
    return useQuery([API_URLS.book, bookId], fakeApiCall);
};
