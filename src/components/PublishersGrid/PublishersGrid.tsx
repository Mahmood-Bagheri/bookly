import React, { FunctionComponent } from "react";
/* components */
/* modules */
import clsx from 'classnames';
/* helpers */
/* assets */
/* types */
import { PublishersGridComponentProps } from './PublishersGrid.types'
/* styles */
import s from './PublishersGrid.module.scss'

export const PublishersGrid: FunctionComponent<PublishersGridComponentProps> = props => {
    const {className, ...restProps} = props;
    return <div className={clsx(s.box, className)}></div>;
    };