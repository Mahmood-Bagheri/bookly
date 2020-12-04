import { useQuery } from "react-query";
import API_URLS from "constants/apiUrls";
import apiService, { ApiServiceError } from "services/api/apiService";

export const readBooks = async () => {
    const { data } = await apiService.get(API_URLS.book);
    return data;
};

const fakeApiCall = (): Promise<Book.Query.Result> =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([{ id: "Salam" }]);
        }, 3000);
    });

export const useBooks = () => {
    return useQuery<Book.Query.Result, ApiServiceError>(
        API_URLS.book,
        fakeApiCall
    );
};
