import React, { FC } from "react";
/* components */
import { CommentBox } from "components/Comment";
import { GenericGrid } from "components/GenericGrid";
import { Col } from "components/Col";
import { Text } from "components/Text";
/* helpers */
import { uniqueId } from "helpers/uniqueId";
/* types */
import { CommentsGridProps } from "./CommentsGrid.types";
import { $ElementProps } from "types/global";
/* styles */
import s from "./CommentsGrid.module.scss";

export const CommentsGrid: FC<CommentsGridProps> = props => {
    const { comments, onDelete, title = "نظرات کاربران" } = props;

    return (
        <div className={s.box}>
            <Text className={s.title}>{title}</Text>
            <GenericGrid<Comment.Query.Result>
                items={comments}
                renderItem={cm => renderComments(cm, onDelete)}
                withRow
            />
        </div>
    );
};

const renderComments = (
    comment: Comment.Query.Result,
    onDelete: $ElementProps<typeof CommentsGrid>["onDelete"]
) => (
    <Col col={12} key={uniqueId()}>
        <CommentBox.Component
            key={comment._id}
            _id={comment._id}
            author={comment.author}
            body={comment.body}
            onDelete={onDelete}
            createdAt={comment.createdAt}
            updatedAt={comment.updatedAt}
        />
    </Col>
);
