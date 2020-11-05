import React, { FunctionComponent } from "react";
/* components */
import { BookBox } from "components/BookBox";
/* helpers */
import { fakeArrayGenerator } from "helpers/fakeArrayGenerator";
/* types */
import { BooksGridComponentProps } from "./BooksGrid.types";

export const BooksGrid: FunctionComponent<BooksGridComponentProps> = props => {
    return <div className="row">{fakeArrayGenerator(12).map(renderBooks)}</div>;
};

const renderBooks = (item: unknown) => (
    <div className="col-lg-6 col-xl-3 mb-3">
        <BookBox />
    </div>
);
