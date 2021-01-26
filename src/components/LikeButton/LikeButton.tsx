import React, { FC } from 'react';
/* components */
import { Spinner } from 'components/Spinner';
/* modules */
import classnames from 'classnames';
/* assets */
import { ReactComponent as LikeIcon } from 'assets/icons/like.svg';
/* types */
import { LikeButtonComponentProps } from './LikeButton.types';
/* styles */
import s from './LikeButton.module.scss';
import { AclService } from 'services/rbac';

export const LikeButton: FC<LikeButtonComponentProps> = props => {
    const {
        onChange,
        initialLikeState = false,
        loading,
        permission,
        ...restProps
    } = props;
    const svgColor = classnames(s.like, { [s.black]: initialLikeState });

    const toggleLike = () => {
        onChange(initialLikeState);
    };

    if (loading) {
        return <Spinner />;
    }

    return (
        <AclService permission={permission}>
            <LikeIcon
                className={svgColor}
                onClick={toggleLike}
                {...restProps}
            />
        </AclService>
    );
};
