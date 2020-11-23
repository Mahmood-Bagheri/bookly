import React from "react";
/* components */
import { Input } from "antd";
/* modules */
import clsx from "classnames";
/* helpers */
/* assets */
/* types */
import { PasswordComponentProps } from "./Password.types";
/* styles */
import s from "./Password.module.scss";

export const Password = React.forwardRef<any, PasswordComponentProps>(
    ({ className, ...restProps }, ref) => {
        return (
            <Input.Password
                ref={ref}
                className={clsx(s.input, className)}
                {...restProps}
            />
        );
    }
);
