import React, { FC } from "react";
/* components */
import { BookBox } from "components/Book";
import { GenericGrid } from "components/GenericGrid";
import { Col } from "components/Col";
/* helpers */
import { uniqueId } from "helpers/uniqueId";
import { useQueryString } from "hooks/useQueryString";
import { checkInclusion } from "helpers/checkInclusion";
/* types */
import { BooksGridProps } from "./BooksGrid.types.d";
/* styles */

export const BooksGrid: FC<BooksGridProps> = ({ books, loading = false }) => {
    const [{ query }] = useQueryString();

    const filterBooks = (book: Book.Query.Result) =>
        checkInclusion(book?.title, query as string);

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

const renderBooks = (book: Book.Query.Result) => (
    <Col md={6} xl={4} className="mb-3" key={uniqueId()}>
        <BookBox.Component
            _id={book?._id}
            title={book?.title}
            author={book?.author}
            image={book.image}
            /* FIXME complete this part */
            // initialLikeState={false}
            onDeleteBook={bookId => console.log(bookId)}
            category={book.category}
            comments={book.comments}
            createdAt={book.createdAt}
            updatedAt={book.updatedAt}
            isPublished={book.isPublished}
            submittedBy={book.submittedBy}
        />
    </Col>
);
