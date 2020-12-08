import { CommentBoxProps } from "components/CommentBox";

export type CommentsGridProps = {
    onDelete: (commentId: string) => void;
    comments: CommentBoxProps[];
    title?: string;
};
