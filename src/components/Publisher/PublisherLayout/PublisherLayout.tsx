import React, { FunctionComponent } from 'react';
/* components */
/* modules */
import clsx from 'classnames';
/* helpers */
/* assets */
/* types */
import { PublisherLayoutComponentProps } from './PublisherLayout.types';
/* styles */
import s from './PublisherLayout.module.scss';

export const PublisherLayout: FunctionComponent<PublisherLayoutComponentProps> = props => {
    const { className, ...restProps } = props;
    return <div className={clsx(s.box, className)}></div>;
};
