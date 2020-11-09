import React, { FunctionComponent } from "react";
/* components */
import { Input as AntDesignInput } from "antd";
/* modules */
import clsx from "classnames";
/* styles */
import s from "./Input.module.scss";
/* types */
import { InputComponentProps } from "./Input.types";

export const Input: FunctionComponent<InputComponentProps> = ({
    className,
    ...restProps
}) => {
    return (
        <AntDesignInput className={clsx(s.input, className)} {...restProps} />
    );
};
