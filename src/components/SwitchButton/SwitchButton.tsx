import React, { FunctionComponent } from "react";
/* components */
import { Switch as AntDesignSwitch } from "antd";
/* types */
import { SwitchButtonComponentProps } from "./SwitchButton.types";
/* styles */
import s from "./SwitchButton.module.scss";

export const SwitchButton: FunctionComponent<SwitchButtonComponentProps> = props => {
    return <AntDesignSwitch />;
};
