import React, { FC, Fragment } from "react";
/* components */
import { DocumentTitle } from "components/DocumentTitle";
import { useParams } from "react-router-dom";
import { CommentsGrid } from "components/CommentsGrid";
import { comments } from "mock/comments";
import { useDeleteComment } from "hooks";

const User: FC = props => {
    const { userId } = useParams<{ userId: string }>();
    const [deleteComment] = useDeleteComment();
    return (
        <Fragment>
            <DocumentTitle title="User" />
            <CommentsGrid
                title={`نظرات داده شده توسط کاربر با آی دی ${userId}`}
                comments={comments}
                onDelete={commentId => {
                    deleteComment({ commentId });
                }}
            />
        </Fragment>
    );
};

export default User;
