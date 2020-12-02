import { CommentBoxProps } from "components/CommentBox";

export type CommentsGridComponentProps = {
    onDelete: (commentId: string) => void;
    comments: CommentBoxProps[];
    title?: string;
};
