/* constants */
import API_URLS from "constants/apiUrls";
import API_RESPONSE_MESSAGES from "constants/apiResponseMessages";
/* modules */
import { useMutation } from "react-query";
/* helpers */
import * as notice from "helpers/notice";
import { transformObjectToFormData } from "helpers/transformObjectToFormData";
/* services */
import apiService from "services/api/apiService";
import { map, omit, pick } from "lodash/fp";

export const submitBook = async (data: Book.Mutation.Submit.Variables) => {
    const { data: book } = await apiService.post(API_URLS.book, {
        ...omit(["image"])(data),
    });

    const fd = new FormData();
    /* FIXME fix this any  */
    const imageFile = pick<any, any>("image")(data).image;
    fd.append("image", imageFile);
    const { data: image } = await apiService.post(API_URLS.uploadImage, fd);
    console.log({ image });
    await apiService.put(`${API_URLS.attachImageToBook}/${book._id}`, {
        image: image._id,
    });
};

export const useSubmitBook = () =>
    useMutation(submitBook, {
        onSuccess: (_, newBook) => {
            /* update cache and push new data to books */
            notice.success(API_RESPONSE_MESSAGES.book.submit.success);
        },
        onError: () => {
            notice.error(API_RESPONSE_MESSAGES.book.submit.error);
        },
    });
