import React, { FunctionComponent } from "react";
/* components */
import { BookBox } from "components/BookBox";
import { GenericGrid } from "components/GenericGrid";
import { Col } from "components/Col";
/* helpers */
import { uniqueId } from "helpers/uniqueId";
import { mock } from "helpers/mock";
/* types */
import { BooksGridComponentProps } from "./BooksGrid.types";
/* styles */
import s from "./BooksGrid.module.scss";

const renderBooks = (book: Book.Base) => (
    <Col xl={3} sm={6} className="mb-3">
        <BookBox.Component
            key={uniqueId()}
            id={book.id}
            title={book.title}
            author={book.author}
            imageSrc={book.imageSrc}
            initialLikeState={book.initialLikeState}
            onDeleteBook={bookId => console.log(bookId)}
        />
    </Col>
);

export const BooksGrid: FunctionComponent<BooksGridComponentProps> = ({
    books,
    loading,
}) => {
    if (loading) {
        return <BookBox.ShimmerGrid />;
    }

    return (
        <GenericGrid
            withRow
            items={mock<Book.Base>("books", 3)}
            renderItem={renderBooks}
        />
    );
};
