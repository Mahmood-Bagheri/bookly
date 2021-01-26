import React, { FC } from 'react';
/* components */
/* modules */
import clsx from 'classnames';
/* helpers */
/* assets */
import { ReactComponent as Book } from 'assets/icons/reading-book.svg';
/* types */
import { BookSvgProps } from './ReadingBookSvg.types';
/* styles */
import s from './ReadingBookSvg.module.scss';

export const ReadingBookSvg: FC<BookSvgProps> = ({
    className,
    ...restProps
}) => {
    return <Book className={clsx(s.picture, className)} {...restProps} />;
};
