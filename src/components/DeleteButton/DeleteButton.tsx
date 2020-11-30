import React, { FunctionComponent } from "react";
/* components */
import { PopConfirm } from "components/PopConfirm";
import { AclService } from "services/rbac";
/* types */
import { DeleteButtonComponentProps } from "./DeleteButton.types";
/* assets */
import { ReactComponent as DeleteIcon } from "assets/icons/delete.svg";
/* modules */
import classnames from "classnames";
/* styles */
import s from "./DeleteButton.module.scss";
import { Spinner } from "components/Spinner";

export const DeleteButton: FunctionComponent<DeleteButtonComponentProps> = props => {
    const { className, permission, loading = false, ...restProps } = props;
    const clsx = classnames(className, s.icon);

    if (loading) {
        return <Spinner />;
    }

    return (
        <AclService permission={permission}>
            <PopConfirm {...restProps}>
                <DeleteIcon className={clsx} />
            </PopConfirm>
        </AclService>
    );
};
