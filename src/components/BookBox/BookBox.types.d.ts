import { FunctionComponent, ReactElement } from "react";

export type BookBoxRoleTypes = {
    canLike: boolean;
};

export type BaseBookBoxProps = {
    onLikeStateChange: (likeState: boolean) => void;
    onDeleteBook: (bookId: string) => void;
    initialLikeState: boolean;
    title: string;
    author: string;
    imageSrc?: string;
    id: string;
};

export type BookBoxComponentProps = BaseBookBoxProps & BookBoxRoleTypes;

export type BookBoxComponentType = (
    props: BookBoxComponentProps
) => ReactElement;
