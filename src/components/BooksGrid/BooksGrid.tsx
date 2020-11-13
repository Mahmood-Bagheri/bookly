import React, { FunctionComponent } from "react";
/* components */
import { BookBox } from "components/BookBox";
import { Container } from "components/Container";
import { LoadingIndicator } from "components/LoadingIndicator";
/* assets */
import BookImage from "assets/images/book.jpg";
/* types */
import { BooksGridComponentProps } from "./BooksGrid.types";
/* styles */
import s from "./BooksGrid.module.scss";
import { Link } from "react-router-dom";
import { routeTo } from "helpers/routeTo";
import { Col } from "components/Col";

export const BooksGrid: FunctionComponent<BooksGridComponentProps> = ({
    title = "کتاب ها",
    loading = false,
    books,
}) => {
    if (!books || loading) {
        return <LoadingIndicator />;
    }

    return (
        <Container>
            <h1 className={s.title}>{title}</h1>
            <div className="row">{books.map(renderBooks)}</div>
        </Container>
    );
};

const renderBooks = (item: unknown, index: number) => (
    <Col lg={6} xl={3} className="mb-3">
        <Link to={routeTo("error", { id: "Salam" })}>
            <BookBox
                title="جز از کل"
                author="استیو تولتز"
                imageSrc={`https://source.unsplash.com/500x500/?book&sig=${index}`}
                canLike={false}
                onBookmarkStateChange={() => {}}
                onLikeStateChange={() => {}}
                initialLikeState={false}
            />
        </Link>
    </Col>
);
