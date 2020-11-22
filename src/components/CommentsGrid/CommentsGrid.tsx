import React, { FunctionComponent } from "react";
/* components */
import { CommentBox, CommentBoxProps } from "components/CommentBox";
import { LoadingIndicator } from "components/LoadingIndicator";
/* types */
import { CommentsGridComponentProps } from "./CommentsGrid.types";
/* styles */
import s from "./CommentsGrid.module.scss";

export const CommentsGrid: FunctionComponent<CommentsGridComponentProps> = props => {
    const { comments, onDelete } = props;

    const renderComents = (comment: CommentBoxProps) => (
        <CommentBox
            key={comment.id}
            id={comment.id}
            username={comment.username}
            date={comment.date}
            body={comment.body}
            onDelete={onDelete}
        />
    );
    return <div className={s.box}>{comments.map(renderComents)}</div>;
};
