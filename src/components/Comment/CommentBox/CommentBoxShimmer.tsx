import React from 'react';
/* styles */
import s from './CommentBoxShimmer.module.scss';

export const CommentBoxShimmer = () => {
    return (
        <div className={s.box}>
            <div className='d-flex '>
                <div className={s.profileImage} />
                <div className={s.wrap}></div>
            </div>
        </div>
    );
};
