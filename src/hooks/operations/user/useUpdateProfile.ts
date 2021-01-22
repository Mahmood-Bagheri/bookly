import { useMutation } from "react-query";
import API_URLS from "constants/apiUrls";
import apiService from "services/api/apiService";
import { Profile } from "types/profile";
import * as notice from "helpers/notice";
import API_RESPONSE_MESSAGES from "constants/apiResponseMessages";

export const updateProfile = async (
    profile: Profile.Mutation.Update.Variables
) => {
    const { data } = await apiService.patch(API_URLS.profile, profile);
    return data;
};

export const useUpdateProfile = () =>
    useMutation(updateProfile, {
        onError: () => {
            notice.error(API_RESPONSE_MESSAGES.profile.update.error);
        },
        onSuccess: () => {
            notice.success(API_RESPONSE_MESSAGES.profile.update.success);
        },
    });
