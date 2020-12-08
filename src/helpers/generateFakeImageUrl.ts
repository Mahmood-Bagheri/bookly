import { FAKE_IMAGE_API_CONFIG } from "constants/config";
import { uniqueId } from "lodash";

const { size, apiUrl, key } = FAKE_IMAGE_API_CONFIG;

export const generateFakeImageUrl = (
    keyword: string = key,
    imageSize: string = size
): string => {
    return `${apiUrl}/${imageSize}/?${keyword}&sig=${uniqueId()}`;
};
