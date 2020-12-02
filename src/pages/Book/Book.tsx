import React, { FC, Fragment } from "react";
/* components */
import { Col } from "components/Col";
import { Row } from "components/Row";
import { DocumentTitle } from "components/DocumentTitle";
import { BookDescriptionContainer } from "containers/book/BookDescription";
import { CommentsContainer } from "containers/book/Comments";
import { LeaveCommentContainer } from "containers/book/LeaveComment";
import { BookDetailsContainer } from "containers/book/BookDetails";
import { TopBar } from "components/TopBar";
import { useSingleBook } from "hooks";
import { useParams } from "react-router-dom";

/* modules */

const Book: FC = () => {
    const { bookId } = useParams<{ bookId: string }>();
    const { data, isLoading } = useSingleBook(bookId);
    return (
        <Fragment>
            <TopBar />

            <Row>
                <DocumentTitle title="کتاب" />
                <Col xl={4}>
                    <BookDetailsContainer />
                    <LeaveCommentContainer />
                </Col>

                <Col xl={8} className="mt-3 mt-xl-0">
                    <BookDescriptionContainer />
                    <CommentsContainer />
                </Col>
            </Row>
        </Fragment>
    );
};

export default Book;
