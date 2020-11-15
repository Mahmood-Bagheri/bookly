import React, { FunctionComponent } from "react";
/* components */
import { BookBox } from "components/BookBox";
import { Container } from "components/Container";
import { LoadingIndicator } from "components/LoadingIndicator";
/* types */
import { BooksGridComponentProps } from "./BooksGrid.types";
/* styles */
import s from "./BooksGrid.module.scss";

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
    <BookBox
        title="جز از کل"
        author="استیو تولتز"
        imageSrc={`https://source.unsplash.com/500x500/?book&sig=${index}`}
        canLike={false}
        onBookmarkStateChange={() => {}}
        onLikeStateChange={() => {}}
        initialLikeState={false}
    />
);
