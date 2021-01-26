import React, { FC } from 'react';
/* components */
/* modules */
import clsx from 'classnames';
/* helpers */
/* assets */
import { ReactComponent as Picture } from 'assets/icons/login.svg';
/* types */
import { LoginFormPictureProps } from './LoginFormPicture.types';
/* styles */
import s from './LoginFormPicture.module.scss';

export const LoginFormPicture: FC<LoginFormPictureProps> = ({
    className,
    ...restProps
}) => {
    return (
        <div className='d-flex justify-content-center'>
            <Picture className={clsx(s.picture, className)} {...restProps} />
        </div>
    );
};
