import React, { FC, Fragment } from "react";
/* components */
import { DocumentTitle } from "components/DocumentTitle";
import { useParams } from "react-router-dom";
import { CommentsGrid } from "components/CommentsGrid";
import { useDeleteComment } from "hooks";
import { mock } from "helpers/mock";
import { Comment } from "components/CommentBox";

const User: FC = props => {
    const { userId } = useParams<{ userId: string }>();
    const [deleteComment] = useDeleteComment();

    return (
        <Fragment>
            <DocumentTitle title="User" />
            <CommentsGrid
                title={`نظرات داده شده توسط کاربر با آی دی ${userId}`}
                comments={mock<Comment>("comments")}
                onDelete={commentId => {
                    deleteComment({ commentId });
                }}
            />
        </Fragment>
    );
};

export default User;
