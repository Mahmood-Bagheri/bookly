import React, { FC, Fragment } from "react";
/* components */
import { DocumentTitle } from "components/DocumentTitle";
import { useParams } from "react-router-dom";
import { CommentsGrid } from "components/Comment";
import { useDeleteComment } from "hooks";
import { mock } from "helpers/mock";

const User: FC = props => {
    const { userId } = useParams<{ userId: string }>();
    const [deleteComment] = useDeleteComment();

    return (
        <Fragment>
            <DocumentTitle title="کاربر" />
            <CommentsGrid
                title={`نظرات داده شده توسط کاربر با آی دی ${userId}`}
                comments={mock<Comment.Query.Result>("comments")}
                onDelete={commentId => {
                    deleteComment(commentId);
                }}
            />
        </Fragment>
    );
};

export default User;
