import React, { FunctionComponent } from "react";
/* components */
import { BookBox } from "components/BookBox";
import { Container } from "components/Container";
/* helpers */
import { fakeArrayGenerator } from "helpers/fakeArrayGenerator";
/* types */
import { BooksGridComponentProps } from "./BooksGrid.types";

export const BooksGrid: FunctionComponent<BooksGridComponentProps> = props => {
    return (
        <Container>
            <div className="row">{fakeArrayGenerator(12).map(renderBooks)}</div>
        </Container>
    );
};

const renderBooks = (item: unknown) => (
    <div className="col-lg-6 col-xl-3 mb-3">
        <BookBox canLike={false} />
    </div>
);
