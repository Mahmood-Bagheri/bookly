import { Comment } from 'types/comment';

export type CommentsFunctions = {
    onDelete?: (id: string) => void;
};
export type CommentBoxProps = Comment.Query.Result & CommentsFunctions;
