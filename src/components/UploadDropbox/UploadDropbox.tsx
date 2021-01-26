import React, { FC } from 'react';
/* components */
import { Upload } from 'antd';
/* modules */
import clsx from 'classnames';
/* assets */
import { ReactComponent as ImageIcon } from 'assets/icons/image.svg';
/* types */
import { UploadDropboxProps } from './UploadDropbox.types';
/* styles */
import s from './UploadDropbox.module.scss';
import { injectDefaultProps } from 'components/hoc/inject';

const { Dragger } = Upload;

const UploadDropbox: FC<UploadDropboxProps> = ({
    className,
    title,
    subTitle,
    ...restProps
}) => {
    return (
        <div className={clsx(s.box, className)}>
            <Dragger {...restProps}>
                <ImageIcon />
                <p className={s.title}>{title}</p>
                <p className={s.description}>{subTitle}</p>
            </Dragger>
        </div>
    );
};

export default injectDefaultProps(UploadDropbox, {
    title: 'تصویر را اینجا وِل کنید',
    subTitle: 'حداکثر حجم عکس باید 500 کیلوبایت باشد',
});
