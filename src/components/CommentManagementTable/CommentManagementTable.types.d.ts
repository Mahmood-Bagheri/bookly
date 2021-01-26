import { HTMLProps } from 'react';
import { Comment } from 'types/comment';

export type CommentManagementTableTypes = {
    comments: Comment.Query.Result[];
};

export type CommentManagementTableProps = HTMLProps<HTMLDivElement> &
    CommentManagementTableTypes;
