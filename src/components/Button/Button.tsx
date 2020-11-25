import React, { forwardRef } from "react";
/* components */
import { Button as AntDesignButton } from "antd";
/* modules */
import clsx from "classnames";
/* helpers */
/* assets */
/* types */
import { Props, Ref } from "./Button.types";
/* styles */
import s from "./Button.module.scss";

export const Button = React.forwardRef<Ref, Props>(
    ({ className, ...restProps }, ref) => (
        <AntDesignButton
            ref={ref}
            className={clsx(s.button, className)}
            {...restProps}
        />
    )
);
