import { FunctionComponent, ReactElement } from "react";

export type BaseBookBoxProps = {
    onLikeStateChange: (likeState: boolean) => void;
    onBookmarkStateChange: (bookmarkState: boolean) => void;
    initialLikeState: boolean;
    initialBookmarkState: boolean;
};

export type BookBoxComponentProps = Partial<BaseBookBoxProps>;

export type BookBoxComponentType = (
    props: BookBoxComponentProps
) => ReactElement;
