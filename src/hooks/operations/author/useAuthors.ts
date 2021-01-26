import { QueryConfig, useQuery } from 'react-query';
import API_URLS from 'constants/apiUrls';
import apiService, { ApiServiceError } from 'services/api/apiService';

export const readAuthors = async () => {
    const { data } = await apiService.get(API_URLS.author);
    return data;
};

export const useAuthors = (
    queryConfig?: QueryConfig<Author.Query.Result[], ApiServiceError>
) => {
    return useQuery<Author.Query.Result[], ApiServiceError>(
        API_URLS.author,
        readAuthors,
        queryConfig
    );
};
