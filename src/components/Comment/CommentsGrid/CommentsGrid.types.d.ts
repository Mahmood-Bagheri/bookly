import { CommentBoxProps } from "components/Comment";

export type CommentsGridProps = {
    onDelete: (commentId: string) => void;
    comments: CommentBoxProps[];
    title?: string;
    loading?: boolean;
};
