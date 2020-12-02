import { FunctionComponent, ReactElement } from "react";

export type Functions = {
    onDeleteBook: (bookId: string) => void;
};
export type BookProps = Book.Base & Functions;
