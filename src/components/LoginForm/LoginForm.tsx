import React, { FunctionComponent } from "react";
/* components */
/* modules */
import clsx from 'classnames';
/* helpers */
/* assets */
/* types */
import { LoginFormComponentProps } from './LoginForm.types'
/* styles */
import s from './LoginForm.module.scss'

export const LoginForm: FunctionComponent<LoginFormComponentProps> = props => {
    const {className, ...restProps} = props;
    return <div className={clsx(s.box, className)}></div>;
    };