import React, { FunctionComponent } from "react";
/* components */
/* modules */
import clsx from 'classnames';
/* helpers */
/* assets */
/* types */
import { MenuBarItemComponentProps } from './MenuBarItem.types'
/* styles */
import s from './MenuBarItem.module.scss'

export const MenuBarItem: FunctionComponent<MenuBarItemComponentProps> = props => {
    const {className, ...restProps} = props;
    return <div className={clsx(s.box, className)}></div>;
    };