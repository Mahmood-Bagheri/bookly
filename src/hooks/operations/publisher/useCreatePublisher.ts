import { useMutation } from 'react-query';
/* constants */
import API_URLS from 'constants/apiUrls';
/* apiService */
import apiService, { AxiosResponse } from 'services/api/apiService';
/* helpers */
import { merge, omit } from 'lodash/fp';
/* modules */
import { queryCache } from 'services/react-query/reactQueryService';
/* types */
import { Publisher } from 'types/publisher';
import { Image } from 'types/image';

export type CreatePublisherMutationVariables = {
    title: string;
    description: string;
    image: File;
};

type Dto = CreatePublisherMutationVariables;
type Response = AxiosResponse<Publisher.Query.Result>;
type ImageDto = { image: File };
type ImageResponse = AxiosResponse<Image>;
type AttachImageDto = {
    image: string;
};

export const createPublisher = async (
    dto: CreatePublisherMutationVariables
) => {
    try {
        const fd = new FormData();
        fd.append('image', dto.image);

        const { data: image } = await apiService.post<ImageDto, ImageResponse>(
            API_URLS.uploadImage,
            fd
        );

        const { data: publisher } = await apiService.post<Dto, Response>(
            API_URLS.publisher,
            omit('image')(dto)
        );

        await apiService.put<AttachImageDto, ImageResponse>(
            `${API_URLS.attachImageToPublisher}/${publisher._id}`,
            { image: image._id }
        );

        return publisher;
    } catch (error) {}
};

export const useCreatePublisher = () =>
    useMutation(createPublisher, {
        onSuccess: () => {
            queryCache.refetchQueries(API_URLS.publisher);
        },
    });
