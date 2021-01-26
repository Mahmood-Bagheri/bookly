import { useQuery } from 'react-query';
import API_URLS from 'constants/apiUrls';
import apiService from 'services/api/apiService';

export const readComments = async () => {
    const { data } = await apiService.get(API_URLS.comments);
    return data;
};

export const useComments = () => {
    return useQuery(API_URLS.comments, readComments);
};
