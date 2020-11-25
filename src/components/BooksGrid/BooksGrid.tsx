import React, { FunctionComponent } from "react";
/* components */
import { Book, BookBox } from "components/BookBox";
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

    const onLikeStateChange = (likeState: boolean, bookId: string) => {
        like({ likeState, bookId });
    };

    const renderBooks = (book: Book) => (
        <BookBox
            key={book.id.toString()}
            id={book.id}
            title={book.title}
            author={book.author}
            imageSrc={book.imageSrc}
            initialLikeState={book.initialLikeState}
            onLikeStateChange={likeState =>
                onLikeStateChange(likeState, book.id)
            }
            onDeleteBook={bookId => console.log(bookId)}
            likeLoading={isLoading}
        />
    );
    return <GenericGrid<Book> withRow items={books} renderItem={renderBooks} />;
};
