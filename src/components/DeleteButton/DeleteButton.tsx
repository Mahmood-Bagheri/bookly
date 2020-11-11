import React, { FunctionComponent } from "react";
/* types */
import { DeleteButtonComponentProps } from "./DeleteButton.types";
/* assets */
import { ReactComponent as DeleteIcon } from "assets/icons/delete.svg";
/* modules */
import classnames from "classnames";
/* styles */
import s from "./DeleteButton.module.scss";

export const DeleteButton: FunctionComponent<DeleteButtonComponentProps> = props => {
    const { className, ...restProps } = props;
    const clsx = classnames(className, s.icon);
    return <DeleteIcon className={clsx} {...restProps} />;
};
