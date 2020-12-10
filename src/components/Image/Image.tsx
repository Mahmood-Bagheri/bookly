import React, { FC } from "react";
/* components */
/* modules */
import clsx from "classnames";
/* types */
import { ImageComponentProps } from "./Image.types.d";
/* styles */
import s from "./Image.module.scss";

// todo -> fix this file to use 'react-lazy-load-image-component'

export const Image: FC<ImageComponentProps> = ({ className, ...restProps }) => {
    return <img className={clsx(s.img, className)} {...restProps} />;
};
