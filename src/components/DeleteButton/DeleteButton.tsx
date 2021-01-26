import React, { FC } from 'react';
/* components */
import { PopConfirm } from 'components/PopConfirm';
import { Spinner } from 'components/Spinner';
import { AclService } from 'services/rbac';
/* types */
import { DeleteButtonProps } from './DeleteButton.types';
/* assets */
import { ReactComponent as DeleteIcon } from 'assets/icons/delete.svg';
/* modules */
import clsx from 'classnames';
/* styles */
import s from './DeleteButton.module.scss';

export const DeleteButton: FC<DeleteButtonProps> = ({
    className,
    permission,
    loading = false,
    ...restProps
}) => {
    if (loading) {
        return <Spinner />;
    }

    return (
        <AclService permission={permission}>
            <PopConfirm {...restProps}>
                <DeleteIcon className={clsx(className, s.icon)} />
            </PopConfirm>
        </AclService>
    );
};
