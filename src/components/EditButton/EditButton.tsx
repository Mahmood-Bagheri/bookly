import React, { FC } from "react";
/* components */
/* modules */
import clsx from "classnames";
/* helpers */
/* assets */
import { ReactComponent as EditIcon } from "assets/icons/edit.svg";

/* types */
import { EditButtonProps } from "./EditButton.types";
/* styles */
import s from "./EditButton.module.scss";
import { AclService } from "services/rbac";

export const EditButton: FC<EditButtonProps> = ({
    className,
    permission,
    ...restProps
}) => {
    return (
        <AclService permission={permission}>
            <EditIcon className={clsx(className, s.icon)} {...restProps} />
        </AclService>
    );
};
