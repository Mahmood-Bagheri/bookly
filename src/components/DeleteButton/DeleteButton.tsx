import React, { FunctionComponent } from "react";
/* components */
import { PopConfirm } from "components/PopConfirm";
/* types */
import { DeleteButtonComponentProps } from "./DeleteButton.types";
/* assets */
import { ReactComponent as DeleteIcon } from "assets/icons/delete.svg";
/* modules */
import classnames from "classnames";
/* styles */
import s from "./DeleteButton.module.scss";
import { Tooltip } from "antd";

export const DeleteButton: FunctionComponent<DeleteButtonComponentProps> = props => {
    const { className, ...restProps } = props;
    const clsx = classnames(className, s.icon);
    return (
        <PopConfirm {...restProps}>
            <DeleteIcon className={clsx} />
        </PopConfirm>
    );
};
