import React, { FC } from 'react';
/* components */
/* modules */
import clsx from 'classnames';
/* helpers */
/* assets */
import { ReactComponent as Picture } from 'assets/icons/profile.svg';
/* types */
import { ProfileFormPictureProps } from './ProfileFormPicture.types';
/* styles */
import s from './ProfileFormPicture.module.scss';

export const ProfileFormPicture: FC<ProfileFormPictureProps> = ({
    className,
    ...restProps
}) => {
    return <Picture className={clsx(s.picture, className)} {...restProps} />;
};
