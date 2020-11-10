import React, { FunctionComponent } from "react";
/* components */
import { CommentBox, CommentBoxProps } from "components/CommentBox";
/* types */
import { CommentsGridComponentProps } from "./CommentsGrid.types";
/* styles */
import s from "./CommentsGrid.module.scss";

export const CommentsGrid: FunctionComponent<CommentsGridComponentProps> = ({
    comments,
}) => {
    return <div className={s.box}>{comments.map(renderComments)}</div>;
};

const renderComments = (comment: CommentBoxProps) => {
    return (
        <CommentBox
            username={comment.username}
            date={comment.date}
            body={comment.body}
        />
    );
};
