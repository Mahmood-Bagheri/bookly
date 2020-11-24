import { FunctionComponent, ReactElement } from "react";

export type Book = {
    initialLikeState: boolean;
    title: string;
    author: string;
    imageSrc?: string;
    id: string;
    likeLoading?: boolean;
};

export type BookBoxActions = {
    onLikeStateChange: (likeState: boolean) => void;
    onDeleteBook: (bookId: string) => void;
};

export type BookBoxComponentProps = BookBoxActions & Book;

export type BookBoxComponentType = (
    props: BookBoxComponentProps
) => ReactElement;
