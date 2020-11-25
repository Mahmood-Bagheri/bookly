export type Comment = {
    id: string;
    username: string;
    date: Date;
    body: string;
    onDelete?: (id: string) => void;
};
export type CommentBoxComponentProps = Comment & {};
