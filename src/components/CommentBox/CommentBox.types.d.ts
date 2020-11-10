export type CommentBoxProps = {
    id: string;
    username: string;
    date: Date;
    body: string;
    canDelete?: boolean;
    onDelete?: (id: string) => void;
};
export type CommentBoxComponentProps = CommentBoxProps & {};
