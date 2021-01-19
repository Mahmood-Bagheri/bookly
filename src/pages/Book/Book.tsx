import React, { FC, Fragment } from "react";
/* components */
import { Col } from "components/Col";
import { Row } from "components/Row";
import { DocumentTitle } from "components/DocumentTitle";
import { useCreateComment, useDeleteComment, useSingleBook } from "hooks";
import { useParams } from "react-router-dom";
import { BookDetailsBox } from "components/Book";
import { AclService } from "services/rbac";
import { FormInstance } from "antd/lib/form";
import { CommentInputBox, CommentsGrid } from "components/Comment";
import { DescriptionBox } from "components/DescriptionBox";

/* modules */

const Book: FC = () => {
    const { bookId } = useParams<Book.Id>();
    const { data, isLoading } = useSingleBook(bookId);

    /* initiating operations hooks */
    const [
        createComment,
        { isLoading: createCommentLoading },
    ] = useCreateComment();

    const handleSubmitComment = (comment: string, form: FormInstance) => {
        /* create comment api call */
        createComment(
            { bookId, comment },
            {
                onSuccess: () => {
                    /* reset fields after successful api call */
                    form.resetFields();
                },
            }
        );
    };
    const [deleteComment] = useDeleteComment();

    const handleDeleteComment = (commentId: string) => {
        /* delete comment api call */
        deleteComment({ commentId });
        console.log(`deleting comment with the commentId: ${commentId} `);
    };

    if (!data || isLoading) {
        return <div></div>;
    }

    return (
        <Fragment>
            <Row>
                <DocumentTitle title="کتاب" />
                <Col xl={4}>
                    <BookDetailsBox
                        id={bookId}
                        title={data?.title}
                        author={data?.author?.name}
                    />
                    <AclService permission="comments.create">
                        <CommentInputBox
                            loading={createCommentLoading}
                            onSubmit={handleSubmitComment}
                        />
                    </AclService>
                </Col>

                <Col xl={8} className="mt-3 mt-xl-0">
                    <DescriptionBox
                        title="مشخصات کتاب"
                        description={"description"}
                    />
                    <AclService permission="comments.read">
                        <CommentsGrid
                            onDelete={handleDeleteComment}
                            comments={data?.comments}
                        />
                    </AclService>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Book;
