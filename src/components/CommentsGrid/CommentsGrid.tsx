import React, { FunctionComponent } from "react";
/* components */
import { CommentBox, Comment } from "components/CommentBox";
/* types */
import { CommentsGridComponentProps } from "./CommentsGrid.types";
/* styles */
import s from "./CommentsGrid.module.scss";
import { GenericGrid } from "components/GenericGrid";

export const CommentsGrid: FunctionComponent<CommentsGridComponentProps> = props => {
    const { comments, onDelete } = props;

    const renderComments = (comment: Comment) => (
        <CommentBox
            key={comment.id}
            id={comment.id}
            username={comment.username}
            date={comment.date}
            body={comment.body}
            onDelete={onDelete}
        />
    );
    return (
        <div className={s.box}>
            <GenericGrid<Comment>
                items={comments}
                renderItem={renderComments}
            />
        </div>
    );
};
