import React, { FunctionComponent } from "react";
/* components */
import { Book, BookBox } from "components/BookBox";
import { Container } from "components/Container";
import { LoadingIndicator } from "components/LoadingIndicator";
import { Row } from "components/Row";
import { TopBar } from "components/TopBar";

/* types */
import { BooksGridComponentProps } from "./BooksGrid.types";
/* styles */
import s from "./BooksGrid.module.scss";

export const BooksGrid: FunctionComponent<BooksGridComponentProps> = ({
    loading = false,
    books,
}) => {
    if (!books || loading) {
        return <LoadingIndicator />;
    }

    return (
        <Container>
            <Row>{books.map(renderBooks)}</Row>
        </Container>
    );
};

const renderBooks = (item: Book) => (
    <BookBox
        id={item.id}
        title={item.title}
        author={item.author}
        imageSrc={item.imageSrc}
        initialLikeState={item.initialLikeState}
        onLikeStateChange={() => {}}
        onDeleteBook={bookId => console.log(bookId, "logged from renderBooks")}
    />
);
