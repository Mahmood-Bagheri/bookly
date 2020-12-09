import React, { forwardRef } from "react";
/* components */
import { Button as Btn } from "antd";
/* modules */
import clsx from "classnames";
/* helpers */
/* assets */
/* types */
import { Props, Ref } from "./Button.types";
/* styles */
import s from "./Button.module.scss";

export const Button = forwardRef<Ref, Props>(
    ({ className, ...restProps }, ref) => (
        <Btn ref={ref} className={clsx(s.button, className)} {...restProps} />
    )
);
