import { FunctionComponent, ReactElement } from "react";

export type Book = {
    initialLikeState: boolean;
    title: string;
    author: string;
    imageSrc?: string;
    id: string;
};

export type Functions = {
    onDeleteBook: (bookId: string) => void;
};
export type BookProps = Book & Functions;
