import { HTMLProps } from "react";

export type CommentManagementTableTypes = {
    comments: Comment.Query.Result[];
};

export type CommentManagementTableProps = HTMLProps<HTMLDivElement> &
    CommentManagementTableTypes;
