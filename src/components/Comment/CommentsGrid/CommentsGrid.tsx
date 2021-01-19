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
import { Row } from "components/Row";

export const CommentsGrid: FC<CommentsGridProps> = props => {
    const {
        comments,
        onDelete,
        title = "نظرات کاربران",
        loading = false,
    } = props;

    if (loading) {
        return <div></div>;
    }

    return (
        <div className={s.box}>
            <Text className={s.title}>{title}</Text>
            {/* {JSON.stringify(comments, null, 2)} */}
            {/* <Row>{comments?.map(cm => renderComments(cm, onDelete))}</Row> */}
            <GenericGrid<Comment.Query.Result>
                items={comments.filter(item => item.isPublished)}
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
            isPublished={comment.isPublished}
        />
    </Col>
);
