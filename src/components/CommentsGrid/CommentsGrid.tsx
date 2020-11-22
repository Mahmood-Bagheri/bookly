import React, { FunctionComponent } from "react";
/* components */
import { CommentBox, CommentBoxProps } from "components/CommentBox";
import { LoadingIndicator } from "components/LoadingIndicator";
/* types */
import { CommentsGridComponentProps } from "./CommentsGrid.types";
/* styles */
import s from "./CommentsGrid.module.scss";

export const CommentsGrid: FunctionComponent<CommentsGridComponentProps> = props => {
    const { comments, loading, onDelete } = props;

    if (loading) {
        return <LoadingIndicator />;
    }

    return (
        <div className={s.box}>
            {comments.map(comment => {
                return (
                    <CommentBox
                        key={comment.id}
                        id={comment.id}
                        username={comment.username}
                        date={comment.date}
                        body={comment.body}
                        onDelete={id =>
                            /* comment id is available here to delete or something like that  */
                            onDelete(id)
                        }
                    />
                );
            })}
        </div>
    );
};
