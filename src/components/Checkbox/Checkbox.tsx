import React, { forwardRef } from "react";
/* components */
import { Checkbox as CheckBox } from "antd";
/* types */
import { CheckboxComponentProps } from "./Checkbox.types";
/* styles */
import s from "./Checkbox.module.scss";

export const Checkbox = forwardRef<HTMLInputElement, CheckboxComponentProps>(
    (props, ref) => {
        return <CheckBox ref={ref} {...props} />;
    }
);
