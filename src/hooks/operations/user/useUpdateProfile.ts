import { useMutation } from "react-query";
import API_URLS from "constants/apiUrls";
import apiService from "services/api/apiService";
import { Profile } from "types/profile";
import * as notice from "helpers/notice";
import API_RESPONSE_MESSAGES from "constants/apiResponseMessages";
import { merge, omit, pick } from "lodash/fp";

export const updateProfile = async (dto: Profile.Mutation.Update.Variables) => {
    // console.log(dto.image);
    if (dto.image.name) {
        /* FIXME fix this any  */
        const fd = new FormData();
        const imageFile = pick("image")(dto).image as File;
        fd.append("image", imageFile);

        const { data: image } = await apiService.post(API_URLS.uploadImage, fd);

        const { data } = await apiService.put(
            API_URLS.profile,
            merge({ image: image._id })(omit("image")(dto))
        );
        return data;
    } else {
        const { data } = await apiService.put(API_URLS.profile, dto);
        return data;
    }
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
