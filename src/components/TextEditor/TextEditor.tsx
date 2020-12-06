import React, { FunctionComponent } from "react";
/* components */
import { Input } from "components/Input";
/* modules */
import clsx from "classnames";
/* helpers */
/* assets */
/* types */
import { TextEditorComponentProps } from "./TextEditor.types";
/* styles */
import s from "./TextEditor.module.scss";

export const TextEditor: FunctionComponent<TextEditorComponentProps> = props => {
    const { className, ...restProps } = props;
    return (
        <div className={clsx(s.box, `shadow`, className)}>
            <Input.Textarea rows={4} {...restProps} />
        </div>
    );
};
