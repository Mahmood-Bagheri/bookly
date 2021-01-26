import React, { FC } from 'react';
/* components */
/* modules */
import clsx from 'classnames';
/* types */
import { ImageComponentProps } from './Image.types.d';
/* styles */
import s from './Image.module.scss';
import { injectDefaultProps } from 'components/hoc/inject';
import { DEFAULT_IMAGE_ALT } from 'constants/config';

// todo -> fix this file to use 'react-lazy-load-image-component'

const Image: FC<ImageComponentProps> = ({ className, ...restProps }) => {
    return <img className={clsx(s.img, className)} {...restProps} />;
};

export default injectDefaultProps<ImageComponentProps, 'alt'>(Image, {
    alt: DEFAULT_IMAGE_ALT,
});
