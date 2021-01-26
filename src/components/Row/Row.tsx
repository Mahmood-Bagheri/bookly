import React, { FC } from 'react';
/* components */
/* modules */
import clsx from 'classnames';
/* helpers */
/* assets */
/* types */
import { RowProps } from './Row.types';
/* styles */
import s from './Row.module.scss';

export const Row: FC<RowProps> = props => {
    const { className, ...restProps } = props;
    return <div className={clsx(`row`, className)} {...restProps} />;
};
