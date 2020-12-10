import { inject } from "components/hoc/inject";
import { DEFAULT_IMAGE_ALT } from "constants/config";
import { Image as ImageComponent } from "./Image";

export const Image = inject(ImageComponent, { alt: DEFAULT_IMAGE_ALT });

export * from "./Image.types.d";
