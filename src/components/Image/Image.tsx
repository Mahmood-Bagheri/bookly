import React, { FunctionComponent } from "react";
/* components */
import {
    LazyLoadImage,
    LazyLoadImageProps,
} from "react-lazy-load-image-component";
/* modules */
import clsx from "classnames";
/* types */
/* styles */
import s from "./Image.module.scss";

const defaultAltText = "This image is related to the website :/";

export const Image: FunctionComponent<JSX.IntrinsicElements["img"]> = ({
    className,
    alt = defaultAltText,
    src,
    ...restProps
}) => {
    return (
        <picture>
            <img
                alt={alt}
                src={src}
                className={clsx(s.img, className)}
                {...restProps}
            />
        </picture>
    );
};
