import React from "react";
import { CommentsGrid } from "components/CommentsGrid";
import { useDeleteComment } from "hooks";
import { AclService } from "services/rbac";
import { comments } from "mock/comments";
export const CommentsContainer = () => {
    const [deleteComment] = useDeleteComment();

    const handleDeleteComment = (commentId: string) => {
        /* delete comment api call */
        deleteComment({ commentId });
        console.log(`deleting comment with the commentId: ${commentId} `);
    };

    return (
        <AclService permission="comments.read">
            <CommentsGrid onDelete={handleDeleteComment} comments={comments} />
        </AclService>
    );
};
