import { useMutation } from 'react-query';
import API_URLS from 'constants/apiUrls';
import apiService from 'services/api/apiService';
import { queryCache } from 'services/react-query/reactQueryService';
import { Publisher } from 'types/publisher';

export const deletePublisher = async (publisherId: string) => {
    const { data } = await apiService.delete(
        `${API_URLS.publisher}/${publisherId}`
    );
    return data;
};

export const useDeletePublisher = () =>
    useMutation(deletePublisher, {
        onMutate: publisherId => {
            const publishers:
                | Publisher.Query.Result[]
                | undefined = queryCache.getQueryData(API_URLS.publishers);

            const newPublishers = publishers?.filter(
                item => item._id !== publisherId
            );
            queryCache.setQueryData(API_URLS.publishers, newPublishers);
        },
        onSuccess: () => {
            queryCache.refetchQueries(API_URLS.publishers);
        },
    });
