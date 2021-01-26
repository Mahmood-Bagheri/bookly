import { useQuery } from 'react-query';
import API_URLS from 'constants/apiUrls';
import apiService, {
    ApiServiceError,
    AxiosRequestConfig,
} from 'services/api/apiService';
import { Profile } from 'types/profile';

export const readPublicUserProfile = async (_: unknown, userId: string) => {
    const { data } = await apiService.get(
        `${API_URLS.publicProfile}/${userId}`
    );
    return data;
};

export const usePublicUserProfile = (userId: string) => {
    return useQuery<Profile.Query.Result, ApiServiceError>(
        [API_URLS.profile, userId],
        () => readPublicUserProfile(undefined, userId)
    );
};
