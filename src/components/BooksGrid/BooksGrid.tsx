import React, { FunctionComponent } from "react";
/* components */
import { BookBox } from "components/BookBox";
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
            <TopBar title="کتاب ها" />
            <Row>{books.map(renderBooks)}</Row>
        </Container>
    );
};

const renderBooks = (item: unknown, index: number) => (
    <BookBox
        id="StringIdPassedFromRenderBooks"
        title="جز از کل"
        author="استیو تولتز"
        imageSrc={`https://source.unsplash.com/500x500/?book&sig=${index}`}
        canLike={false}
        onLikeStateChange={() => {}}
        onDeleteBook={bookId => console.log(bookId, "logged from renderBooks")}
        initialLikeState={false}
    />
);
