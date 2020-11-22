import { CommentBoxProps } from "components/CommentBox";

export type CommentsGridComponentProps = {
    loading: boolean;
    onDelete: (commentId: string) => void;
    comments: CommentBoxProps[];
};
