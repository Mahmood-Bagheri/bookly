import React from "react";
import { CommentsGrid } from "components/Comment";
import { useDeleteComment } from "hooks";
import { AclService } from "services/rbac";
import { mock } from "helpers/mock";
export const CommentsContainer = () => {
    const [deleteComment] = useDeleteComment();

    const handleDeleteComment = (commentId: string) => {
        /* delete comment api call */
        deleteComment({ commentId });
        console.log(`deleting comment with the commentId: ${commentId} `);
    };

    return (
        <AclService permission="comments.read">
            <CommentsGrid
                onDelete={handleDeleteComment}
                comments={mock("comments", 4)}
            />
        </AclService>
    );
};
