import React, { FunctionComponent } from "react";
/* components */
import { Input as AntDesignInput } from "antd";
/* modules */
import clsx from "classnames";
/* styles */
import s from "./Input.module.scss";
/* types */
import { InputComponentProps } from "./Input.types";

export const Input = React.forwardRef<any, InputComponentProps>(
    ({ className, ...restProps }, ref) => {
        return (
            <AntDesignInput
                ref={ref}
                className={clsx(s.input, className)}
                {...restProps}
            />
        );
    }
);
