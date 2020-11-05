import React, { FunctionComponent } from "react";
/* types */
import { ImageComponentProps } from "./Image.types";
/* styles */
import s from "./Image.module.scss";

export const Image: FunctionComponent<ImageComponentProps> = props => {
    const defaultAltText = "This image is related to the website :/";
    const { alt = defaultAltText, ...restProps } = props;
    return <img alt={alt} {...restProps} />;
};
