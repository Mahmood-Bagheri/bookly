export type CommentsFunctions = {
    onDelete?: (id: string) => void;
};
export type CommentBoxProps = Comment.Query.Result & CommentsFunctions;
