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
    const { data: book, isLoading } = useSingleBook(bookId);

    /* initiating operations hooks */
    const [
        createComment,
        { isLoading: createCommentLoading },
    ] = useCreateComment();

    const handleSubmitComment = (body: string, form: FormInstance) => {
        /* create comment api call */
        createComment(
            { book: bookId, body },
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

    if (!book || isLoading) {
        return <div></div>;
    }

    return (
        <Fragment>
            <Row>
                <DocumentTitle title="کتاب" />
                <Col xl={4}>
                    <BookDetailsBox
                        id={bookId}
                        releaseYear={book?.releaseYear}
                        title={book?.title}
                        author={book?.author?.name}
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
                        title="توضیحات"
                        description={book.description}
                    />
                    <AclService permission="comments.read">
                        <CommentsGrid
                            loading={isLoading}
                            onDelete={handleDeleteComment}
                            comments={book.comments}
                        />
                    </AclService>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Book;
