import React, { FunctionComponent } from "react";
/* components */
import { Input } from "antd";
/* modules */
import clsx from "classnames";
/* types */
import { TextareaComponentProps } from "./Textarea.types";
/* styles */
import s from "./Textarea.module.scss";

export const Textarea = React.forwardRef<any, TextareaComponentProps>(
    ({ className, ...restProps }, ref) => {
        return (
            <Input.TextArea
                ref={ref}
                className={clsx(s.input, className)}
                {...restProps}
            />
        );
    }
);
