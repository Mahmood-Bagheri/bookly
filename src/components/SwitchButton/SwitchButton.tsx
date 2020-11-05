import React, { FunctionComponent } from "react";
import { SwitchButtonComponentProps } from "./SwitchButton.types";
import { Switch as AntDesignSwitch } from "antd";
import s from "./SwitchButton.module.scss";

export const SwitchButton: FunctionComponent<SwitchButtonComponentProps> = props => {
    return <AntDesignSwitch />;
};
