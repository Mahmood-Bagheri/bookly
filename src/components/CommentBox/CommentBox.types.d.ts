export type Comment = {
    id: string;
    username: string;
    date: Date;
    body: string;
};

export type CommentsFunctions = {
    onDelete?: (id: string) => void;
};
export type CommentBoxComponentProps = Comment & CommentsFunctions;
