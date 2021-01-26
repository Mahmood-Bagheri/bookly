import React from 'react';
/* components */
/* modules */
import clsx from 'classnames';
/* helpers */
/* types */
/* styles */
import s from './CategoryBoxShimmer.module.scss';

export const CategoryBoxShimmer = () => {
    return <div className={clsx(s.box, `shadow`)} />;
};
