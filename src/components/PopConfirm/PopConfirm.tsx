import React, { FunctionComponent } from 'react';
/* components */
import { Popconfirm as AntDesignPopConfirm } from 'antd';
/* modules */
import clsx from 'classnames';
/* helpers */
/* assets */
/* types */
import { PopConfirmComponentProps, PopconfirmProps } from './PopConfirm.types';
/* styles */
import s from './PopConfirm.module.scss';

export const PopConfirm: FunctionComponent<PopConfirmComponentProps> = ({
    title,
    ...restProps
}) => {
    const defaultPopConfirmProps: PopconfirmProps = {
        title: title,
        okText: 'بله',
        cancelText: 'خیر!',
        placement: 'bottomLeft',
    };
    return <AntDesignPopConfirm {...defaultPopConfirmProps} {...restProps} />;
};
