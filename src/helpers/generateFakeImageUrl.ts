import { FAKE_IMAGE_API_CONFIG } from "constants/config";
import Image from "assets/images/book.jpg";
const { size, apiUrl, key } = FAKE_IMAGE_API_CONFIG;

export const generateFakeImageUrl = (
    keyword: string = key,
    imageSize: string = size
): string => {
    return Image;
};

console.log(Image);
