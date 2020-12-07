/**
 *
 * @param object object to transform
 * @description this functions transform the object prop to form data (we need it for api calls)
 */
export const transformObjectToFormData = <T = object>(object: T): FormData => {
    const formData = new FormData();
    for (let [key, value] of Object.entries(object)) {
        formData.append(key, String(value));
    }
    return formData;
};
