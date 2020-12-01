import React, { FunctionComponent } from "react";
/* components */
import { Book, BookBox } from "components/BookBox";
import { GenericGrid } from "components/GenericGrid";
import { Col } from "components/Col";
/* helpers */
import { uniqueId } from "helpers/uniqueId";
/* types */
import { BooksGridComponentProps } from "./BooksGrid.types";
/* styles */
import s from "./BooksGrid.module.scss";

export const BooksGrid: FunctionComponent<BooksGridComponentProps> = ({
    books,
}) => {
    const renderBooks = (book: Book) => (
        <Col xl={3} sm={6} className="mb-3">
            <BookBox
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
    return <GenericGrid<Book> withRow items={books} renderItem={renderBooks} />;
};
