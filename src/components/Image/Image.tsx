import React, { FunctionComponent, ReactComponentElement } from "react";
/* components */
import {
    LazyLoadImage,
    LazyLoadImageProps,
} from "react-lazy-load-image-component";
/* modules */
import clsx from "classnames";
/* types */
import { ImageComponentProps } from "./Image.types";
import "react-lazy-load-image-component/src/effects/blur.css";

/* styles */
import s from "./Image.module.scss";

const defaultAltText = "This image is related to the website :/";
export const Image: FunctionComponent<LazyLoadImageProps> = ({
    className,
    alt = defaultAltText,
    ...restProps
}) => {
    return (
        <LazyLoadImage
            effect="blur"
            alt={alt}
            className={className}
            {...restProps}
        />
    );
};
