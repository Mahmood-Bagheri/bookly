import React, { FunctionComponent } from "react";
/* components */
import { CommentBox } from "components/CommentBox";
/* types */
import { CommentsGridComponentProps } from "./CommentsGrid.types";
/* styles */
import s from "./CommentsGrid.module.scss";
import { GenericGrid } from "components/GenericGrid";
import { Col } from "components/Col";
import { Text } from "components/Text";

export const CommentsGrid: FunctionComponent<CommentsGridComponentProps> = props => {
    const { comments, onDelete, title = "نظرات کاربران" } = props;

    const renderComments = (comment: Comment.Base) => (
        <Col col={12}>
            <CommentBox
                key={comment.id}
                id={comment.id}
                username={comment.username}
                date={comment.date}
                body={comment.body}
                onDelete={onDelete}
            />
        </Col>
    );
    return (
        <div className={s.box}>
            <Text className={s.title}>{title}</Text>
            <GenericGrid<Comment.Base>
                items={comments}
                renderItem={renderComments}
                withRow
            />
        </div>
    );
};
