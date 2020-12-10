import React, { FC } from "react";
/* components */
/* modules */
import clsx from "classnames";
/* types */
import { ImageComponentProps } from "./Image.types.d";
/* styles */
import s from "./Image.module.scss";
import { injectDefaultProps } from "components/hoc/inject";
import { DEFAULT_IMAGE_ALT } from "constants/config";

// todo -> fix this file to use 'react-lazy-load-image-component'

export const Image: FC<ImageComponentProps> = injectDefaultProps<
    ImageComponentProps,
    "alt"
>(
    ({ className, ...restProps }) => {
        return <img className={clsx(s.img, className)} {...restProps} />;
    },
    { alt: DEFAULT_IMAGE_ALT }
);
