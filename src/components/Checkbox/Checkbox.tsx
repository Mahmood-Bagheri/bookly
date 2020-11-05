import React, { FunctionComponent } from "react";
/* components */
import { Checkbox as AntDesignCheckbox } from "antd";
/* types */
import { CheckboxComponentProps } from "./Checkbox.types";
/* styles */
import s from "./Checkbox.module.scss";

export const Checkbox: FunctionComponent<CheckboxComponentProps> = props => {
    return <AntDesignCheckbox {...props} />;
};
