import React, { FunctionComponent } from "react";
/* components */
import { Book, BookBox } from "components/BookBox";
import { Row } from "components/Row";
/* modules */
import { useLikeBook } from "services/api/operations";
/* types */
import { BooksGridComponentProps } from "./BooksGrid.types";
/* styles */
import s from "./BooksGrid.module.scss";
import { GenericGrid } from "components/GenericGrid";

export const BooksGrid: FunctionComponent<BooksGridComponentProps> = ({
    books,
}) => {
    const [like, { isLoading }] = useLikeBook();

    const renderBooks = (book: Book) => (
        <BookBox
            key={book.id.toString()}
            id={book.id}
            title={book.title}
            author={book.author}
            imageSrc={book.imageSrc}
            initialLikeState={book.initialLikeState}
            onLikeStateChange={likeState =>
                like({ likeState, bookId: book.id })
            }
            onDeleteBook={bookId => console.log(bookId)}
            likeLoading={isLoading}
        />
    );
    return (
        <Row>
            <GenericGrid items={books} renderItem={renderBooks} />
        </Row>
    );
};
