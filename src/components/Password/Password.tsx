import React, { FunctionComponent } from "react";
/* components */
/* modules */
import clsx from "classnames";
/* helpers */
/* assets */
/* types */
import { PasswordComponentProps } from "./Password.types";
/* styles */
import { Input } from "antd";

export const Password: FunctionComponent<PasswordComponentProps> = props => {
    return <Input.Password {...props} />;
};
