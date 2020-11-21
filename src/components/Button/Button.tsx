import React, { forwardRef } from "react";
/* components */
import { Button as AntDesignButton } from "antd";
/* modules */
import clsx from "classnames";
/* helpers */
/* assets */
/* types */
import { ButtonComponentProps } from "./Button.types";
/* styles */
import s from "./Button.module.scss";

export const Button = forwardRef<any, ButtonComponentProps>((props, ref) => {
    const { className, ...restProps } = props;
    return (
        <AntDesignButton
            ref={ref}
            className={clsx(s.button, className)}
            {...restProps}
        />
    );
});
