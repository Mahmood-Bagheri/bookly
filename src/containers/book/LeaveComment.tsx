import React from "react";
import { CommentInputBox } from "components/CommentInputBox";
import { useCreateComment } from "hooks";
import { useParams } from "react-router-dom";
import { AclService } from "services/rbac";

export const LeaveCommentContainer = () => {
    const { bookId } = useParams<{ bookId: string }>();

    /* initiating operations hooks */
    const [
        createComment,
        { isLoading: createCommentLoading },
    ] = useCreateComment();

    const handleSubmitComment = (comment: string, callback: Function) => {
        /* create comment api call */
        createComment(
            { bookId, comment },
            {
                onSuccess: () => {
                    callback();
                },
            }
        );
    };

    return (
        <AclService permission="comments.create">
            <CommentInputBox
                loading={createCommentLoading}
                onSubmit={handleSubmitComment}
            />
        </AclService>
    );
};
