import React, { FunctionComponent } from "react";
import { Checkbox as AntDesignCheckbox } from "antd";
import { CheckboxComponentProps } from "./Checkbox.types";
import s from "./Checkbox.module.scss";

export const Checkbox: FunctionComponent<CheckboxComponentProps> = props => {
    return <AntDesignCheckbox {...props} />;
};
