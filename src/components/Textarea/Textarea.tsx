import React, { FunctionComponent } from "react";
/* components */
import { Input } from "antd";
/* types */
import { TextareaComponentProps } from "./Textarea.types";

export const Textarea: FunctionComponent<TextareaComponentProps> = props => {
    return <Input.TextArea {...props} />;
};
