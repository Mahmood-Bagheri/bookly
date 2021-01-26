import React, { FC } from "react";
/* components */
/* modules */
import clsx from 'classnames';
/* helpers */
/* assets */
/* types */
import { PublisherManagementTableProps } from './PublisherManagementTable.types'
/* styles */
import s from './PublisherManagementTable.module.scss'

export const PublisherManagementTable: FC<PublisherManagementTableProps> = ({ className, ...restProps }) => {
    return <div className={clsx(s.box, className)}></div>;
    };