import { useMutation } from "react-query";
import API_URLS from "constants/apiUrls";
import apiService from "services/api/apiService";

type UpdateBookTypes = {};

export const updateBook = async (book: UpdateBookTypes) => {
    const { data } = await apiService.patch(API_URLS.book, book);
    return data;
};

export const useUpdateBook = () => useMutation(updateBook);
