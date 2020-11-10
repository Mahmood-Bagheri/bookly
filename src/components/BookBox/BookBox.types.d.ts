import { FunctionComponent, ReactElement } from "react";

export type BookBoxRoleTypes = {
    canLike: boolean;
};

export type BaseBookBoxProps = {
    onLikeStateChange: (likeState: boolean) => void;
    onBookmarkStateChange: (bookmarkState: boolean) => void;
    initialLikeState: boolean;
    initialBookmarkState: boolean;
    title: string;
    author: string;
    imageSrc?: string;
};

export type BookBoxComponentProps = Partial<BaseBookBoxProps> &
    BookBoxRoleTypes;

export type BookBoxComponentType = (
    props: BookBoxComponentProps
) => ReactElement;
