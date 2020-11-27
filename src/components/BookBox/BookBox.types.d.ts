import { FunctionComponent, ReactElement } from "react";

export type Book = {
    initialLikeState: boolean;
    title: string;
    author: string;
    imageSrc?: string;
    id: string;
};

export type BookBoxActions = {
    onDeleteBook: (bookId: string) => void;
};

export type BookBoxComponentProps = BookBoxActions & Book;
