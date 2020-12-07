import React, { FunctionComponent } from "react";
/* components */
import { BookBox } from "components/BookBox";
import { GenericGrid } from "components/GenericGrid";
import { Col } from "components/Col";
/* helpers */
import { uniqueId } from "helpers/uniqueId";
import { useQueryString } from "hooks/useQueryString";
/* types */
import { BooksGridComponentProps } from "./BooksGrid.types";
/* styles */
import { checkInclusion } from "helpers/checkInclusion";

export const BooksGrid: FunctionComponent<BooksGridComponentProps> = ({
    books,
    loading = false,
}) => {
    const queryString = useQueryString("query");
    const filterBooks = (book: Book.Base) =>
        checkInclusion(book.title, queryString);

    if (loading) {
        return <BookBox.ShimmerGrid />;
    }

    return (
        <GenericGrid
            withRow
            filter={filterBooks}
            items={books}
            renderItem={renderBooks}
        />
    );
};

const renderBooks = (book: Book.Base) => (
    <Col xl={3} sm={6} className="mb-3" key={uniqueId()}>
        <BookBox.Component
            id={book.id}
            title={book.title}
            author={book.author}
            imageSrc={book.imageSrc}
            initialLikeState={book.initialLikeState}
            onDeleteBook={bookId => console.log(bookId)}
        />
    </Col>
);
