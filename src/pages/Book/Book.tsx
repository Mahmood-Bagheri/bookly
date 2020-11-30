import React, { FC } from "react";
/* components */
import { Col } from "components/Col";
import { Row } from "components/Row";
import { DocumentTitle } from "components/DocumentTitle";
import { BookDescriptionContainer } from "containers/book/BookDescription";
import { CommentsContainer } from "containers/book/Comments";
import { LeaveCommentContainer } from "containers/book/LeaveComment";
import { BookDetailsContainer } from "containers/book/BookDetails";

/* modules */

const Book: FC = () => {
    return (
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
    );
};

export default Book;
