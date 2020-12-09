import React, { FC } from "react";
/* components */
/* modules */
import clsx from "classnames";
/* constants */
import { DEFAULT_IMAGE_ALT } from "constants/config";
/* types */
/* styles */
import s from "./Image.module.scss";

// todo -> fix this file to use 'react-lazy-load-image-component'

export const Image: FC<JSX.IntrinsicElements["img"]> = ({
    className,
    alt = DEFAULT_IMAGE_ALT,
    ...restProps
}) => {
    return <img alt={alt} className={clsx(s.img, className)} {...restProps} />;
};
