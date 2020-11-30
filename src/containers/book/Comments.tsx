import React from "react";
import { CommentsGrid } from "components/CommentsGrid";
import { useDeleteComment } from "hooks";
import { AclService } from "services/rbac";
import { randomDate } from "helpers/randomDate";

export const CommentsContainer = () => {
    const [deleteComment] = useDeleteComment();

    const handleDeleteComment = (commentId: string) => {
        /* delete comment api call */
        deleteComment({ commentId });
        console.log(`deleting comment with the commentId: ${commentId} `);
    };

    const comments = [
        {
            id: "123",
            username: "سمیه",
            date: randomDate(new Date("2020/1/1")),
            body: "خیلی خوب بود :)",
        },
    ];

    return (
        <AclService permission="comments.read">
            <CommentsGrid onDelete={handleDeleteComment} comments={comments} />
        </AclService>
    );
};
