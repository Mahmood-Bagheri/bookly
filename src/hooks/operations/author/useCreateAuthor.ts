import { useMutation } from "react-query";
import API_URLS from "constants/apiUrls";
import apiService from "services/api/apiService";
import { queryCache } from "services/react-query/reactQueryService";
import * as notice from "helpers/notice";

export type CreateAuthorMutationVariables = {
    name: string;
};

export const createAuthor = async (dto: CreateAuthorMutationVariables) => {
    try {
        const { data } = await apiService.post(API_URLS.author, dto);
        return data;
    } catch (error) {}
};

export const useCreateAuthor = () =>
    useMutation(createAuthor, {
        onSuccess: () => {
            queryCache.refetchQueries(API_URLS.author);
            notice.success("نویسنده با موفقیت افزوده شد!");
        },
        onError: () => {
            notice.error("مشکلی در افزودن نویسنده پیش آمد");
        },
    });
