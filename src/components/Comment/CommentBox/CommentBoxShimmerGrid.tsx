import React from 'react';
/* components */
import { GenericGrid } from 'components/GenericGrid';
import { CommentBoxShimmer } from './CommentBoxShimmer';
/* helpers */
import { fakeArrayGenerator } from 'helpers/fakeArrayGenerator';
import { SHIMMERS_CONFIG } from 'constants/config';

const renderShimmer = () => {
    return <CommentBoxShimmer />;
};

export const CommentBoxShimmerGrid = () => {
    return (
        <GenericGrid<ArrayConstructor>
            items={fakeArrayGenerator(SHIMMERS_CONFIG.commentBoxCount)}
            renderItem={renderShimmer}
        />
    );
};
