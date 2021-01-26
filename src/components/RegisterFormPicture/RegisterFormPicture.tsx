import React, { FC } from 'react';
/* components */
/* modules */
import clsx from 'classnames';
/* helpers */
/* assets */
import { ReactComponent as Picture } from 'assets/icons/register.svg';

/* types */
import { RegisterFormPictureProps } from './RegisterFormPicture.types';
/* styles */
import s from './RegisterFormPicture.module.scss';

export const RegisterFormPicture: FC<RegisterFormPictureProps> = ({
    className,
    ...restProps
}) => {
    return (
        <div className='d-flex justify-content-center'>
            <Picture className={clsx(s.picture, className)} {...restProps} />
        </div>
    );
};
