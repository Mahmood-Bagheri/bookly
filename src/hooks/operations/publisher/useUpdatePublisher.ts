import { useMutation } from 'react-query';
import API_URLS from 'constants/apiUrls';
import apiService, { ApiServiceError } from 'services/api/apiService';
import { queryCache } from 'services/react-query/reactQueryService';
import { Publisher } from 'types/publisher';

type UpdatePublisherDto = {
    publisherId: string;
} & Partial<{ title: string; description: string }>;

export const updatePublisher = async ({
    publisherId,
    ...rest
}: UpdatePublisherDto) => {
    const { data } = await apiService.put(
        `${API_URLS.publisher}/${publisherId}`,
        rest
    );
    return data;
};

export const useUpdatePublisher = () =>
    useMutation<Publisher.Query.Result, ApiServiceError, UpdatePublisherDto>(
        updatePublisher,
        {
            onMutate: variables => {
                const previousPublisher:
                    | Publisher.Query.Result
                    | undefined = queryCache.getQueryData([
                    API_URLS.publisher,
                    variables.publisherId,
                ]);

                const newPublisher: Partial<Publisher.Query.Result> = {
                    ...previousPublisher,
                    ...variables,
                };

                queryCache.setQueryData(
                    [API_URLS.publisher, variables.publisherId],
                    newPublisher
                );

                return () =>
                    queryCache.setQueryData(
                        [API_URLS.publishers, variables.publisherId],
                        previousPublisher
                    );
            },
            onSuccess: () => {
                queryCache.refetchQueries(API_URLS.publishers);
            },
        }
    );
