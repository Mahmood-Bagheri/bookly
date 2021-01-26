import React, { FunctionComponent } from 'react';
/* components */
/* modules */
import clsx from 'classnames';
/* helpers */
/* assets */
import { ReactComponent as NotFoundIcon } from 'assets/icons/data.svg';
/* types */
import { NotFoundComponentProps } from './NotFound.types';
/* styles */
import s from './NotFound.module.scss';

export const NotFound: FunctionComponent<NotFoundComponentProps> = ({
    icon: Icon = NotFoundIcon,
    title = 'پیدا نشد :(',
    className,
    ...restProps
}) => {
    return (
        <div className={clsx(s.box, `shadow`, className)} {...restProps}>
            <Icon className={s.icon} />
            <p className={s.title}>{title}</p>
        </div>
    );
};
