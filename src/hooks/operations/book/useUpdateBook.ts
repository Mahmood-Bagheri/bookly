import { useMutation } from 'react-query';
import API_URLS from 'constants/apiUrls';
import apiService from 'services/api/apiService';
import * as notice from 'helpers/notice';
import API_RESPONSE_MESSAGES from 'constants/apiResponseMessages';
import { queryCache } from 'services/react-query/reactQueryService';

type Dto = {
    bookId: string;
    dto: Partial<Omit<Book.Query.Result, '_id'>>;
};

export const updateBook = async ({ bookId, dto }: Dto) => {
    try {
        const { data } = await apiService.put(
            `${API_URLS.book}/${bookId}`,
            dto
        );
        return data;
    } catch (error) {}
};

export const useUpdateBook = () =>
    useMutation(updateBook, {
        onSuccess: () => {
            queryCache.refetchQueries(API_URLS.book);
            notice.success(API_RESPONSE_MESSAGES.comment.create.success);
        },
        onError: () => {
            notice.error(API_RESPONSE_MESSAGES.comment.create.error);
        },
    });
