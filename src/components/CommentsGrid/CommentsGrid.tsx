import React, { FunctionComponent } from "react";
/* components */
import { CommentBox, CommentBoxProps } from "components/CommentBox";
import { LoadingIndicator } from "components/LoadingIndicator";
/* modules */
import { usePermissions } from "services/rbac/usePermissions";
import { useRecoilState } from "recoil";
import { roleState } from "services/recoil/user/atoms";
import { get } from "lodash";
/* types */
import { CommentsGridComponentProps } from "./CommentsGrid.types";
/* styles */
import s from "./CommentsGrid.module.scss";

export const CommentsGrid: FunctionComponent<CommentsGridComponentProps> = props => {
    const { comments, loading } = props;
    const { permissions } = usePermissions();
    const [role] = useRecoilState(roleState);

    if (loading) {
        return <LoadingIndicator />;
    }

    return (
        <div className={s.box}>
            {comments.map(comment =>
                renderComments(
                    comment,
                    get(permissions, `${role}.comments.delete`)
                )
            )}
        </div>
    );
};

const renderComments = (comment: CommentBoxProps, canDelete: boolean) => {
    return (
        <CommentBox
            id={comment.id}
            username={comment.username}
            date={comment.date}
            body={comment.body}
            canDelete={canDelete}
            onDelete={id => {
                /* comment id is available here to delete or something like that  */
                console.log(id);
            }}
        />
    );
};
