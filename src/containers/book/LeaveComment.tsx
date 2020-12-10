import React from "react";
import { CommentInputBox } from "components/CommentInputBox";
import { useCreateComment } from "hooks";
import { useParams } from "react-router-dom";
import { AclService } from "services/rbac";
import { FormInstance } from "antd/lib/form";

export const LeaveCommentContainer = () => {
    const { bookId } = useParams<{ bookId: string }>();

    /* initiating operations hooks */
    const [
        createComment,
        { isLoading: createCommentLoading },
    ] = useCreateComment();

    const handleSubmitComment = (comment: string, form: FormInstance) => {
        /* create comment api call */
        createComment(
            { bookId, comment },
            {
                onSuccess: () => {
                    /* reset fields after successful api call */
                    form.resetFields();
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
