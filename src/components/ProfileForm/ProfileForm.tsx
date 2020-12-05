import React, { FC } from "react";
/* components */
/* modules */
import clsx from 'classnames';
/* helpers */
/* assets */
/* types */
import { ProfileFormProps } from './ProfileForm.types'
/* styles */
import s from './ProfileForm.module.scss'

export const ProfileForm: FC<ProfileFormProps> = ({ className, ...restProps }) => {
    return <div className={clsx(s.box, className)}></div>;
    };