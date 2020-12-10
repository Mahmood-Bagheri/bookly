import React, { FC } from "react";
/* components */
import { Switch } from "antd";
/* types */
import { SwitchButtonProps } from "./SwitchButton.types";
/* styles */
import s from "./SwitchButton.module.scss";

export const SwitchButton: FC<SwitchButtonProps> = props => {
    return <Switch />;
};
