import React, { FunctionComponent } from "react";
/* components */
import { BookBox } from "components/BookBox";
import { Container } from "components/Container";
import { LoadingIndicator } from "components/LoadingIndicator";
/* assets */
import BookImage from "assets/images/book.jpg";
/* types */
import { BooksGridComponentProps } from "./BooksGrid.types";
/* styles */
import s from "./BooksGrid.module.scss";
import { Link } from "react-router-dom";
import { routeTo } from "helpers/routeTo";

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

const renderBooks = (item: unknown) => (
    <div className="col-lg-6 col-xl-3 mb-3">
        <Link to={routeTo("bookIntro", { id: "Salam" })}>
            <BookBox
                title="جز از کل"
                author="استیو تولتز"
                imageSrc={BookImage}
                canLike={false}
                onBookmarkStateChange={() => {}}
                onLikeStateChange={() => {}}
                initialLikeState={false}
            />
        </Link>
    </div>
);
