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

export const BooksGrid: FunctionComponent<BooksGridComponentProps> = ({
    books,
}) => {
    const [like, { isLoading }] = useLikeBook();

    const renderBooks = (item: Book) => (
        <BookBox
            key={item.id.toString()}
            id={item.id}
            title={item.title}
            author={item.author}
            imageSrc={item.imageSrc}
            initialLikeState={item.initialLikeState}
            onLikeStateChange={likeState =>
                like({ likeState: !likeState, bookId: item.id })
            }
            onDeleteBook={bookId =>
                console.log(bookId, "logged from renderBooks")
            }
            likeLoading={isLoading}
        />
    );

    return <Row>{books.map(renderBooks)}</Row>;
};
