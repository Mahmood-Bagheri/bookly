import React, { FunctionComponent } from "react";
/* components */
/* modules */
import clsx from 'classnames';
/* helpers */
/* assets */
/* types */
import { MenuBarComponentProps } from './MenuBar.types'
/* styles */
import s from './MenuBar.module.scss'

export const MenuBar: FunctionComponent<MenuBarComponentProps> = props => {
    const {className, ...restProps} = props;
    return <div className={clsx(s.box, className)}></div>;
    };