import React, { FC } from 'react';
/* components */
import { Spinner } from 'components/Spinner';
/* modules */
import clsx from 'classnames';
/* helpers */
/* assets */
/* types */
import { LoadingIndicatorProps } from './LoadingIndicator.types';
/* styles */
import s from './LoadingIndicator.module.scss';

export const LoadingIndicator: FC<LoadingIndicatorProps> = props => {
    const { className, ...restProps } = props;
    return (
        <div className={clsx(s.box, className)}>
            <Spinner height={50} width={50} {...restProps} />
        </div>
    );
};
