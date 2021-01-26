import { QueryConfig, useQuery } from 'react-query';
import API_URLS from 'constants/apiUrls';
import apiService, { ApiServiceError } from 'services/api/apiService';

export const readAuthor = async (authorId: string) => {
    const { data } = await apiService.get(`${API_URLS.author}/${authorId}`);
    return data;
};

export const useAuthor = (
    authorId: string,
    queryConfig?: QueryConfig<Author.Query.Result, ApiServiceError>
) => {
    return useQuery<Author.Query.Result, ApiServiceError>(
        [API_URLS.author, authorId],
        () => readAuthor(authorId),
        queryConfig
    );
};
