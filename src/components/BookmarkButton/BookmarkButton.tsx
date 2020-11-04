import React, { FunctionComponent, useEffect, useState } from "react";
import { BookmarkButtonComponentProps } from "./BookmarkButton.types";
import s from "./BookmarkButton.module.scss";
import classnames from "classnames";

export const BookmarkButton: FunctionComponent<BookmarkButtonComponentProps> = props => {
    const [bookmarkState, setBookmarkState] = useState(false);
    const {
        onBookmarkStateChange = defaultOnBookmarkStateChange,
        ...restProps
    } = props;

    const svgColor = classnames(s.like, { [s.black]: bookmarkState });

    const toggleBookmark = () => {
        setBookmarkState(previousLikeState => !previousLikeState);
    };

    useEffect(() => onBookmarkStateChange(bookmarkState), [bookmarkState]);
    return (
        <svg
            {...restProps}
            xmlns="http://www.w3.org/2000/svg"
            className={svgColor}
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#2c3e50"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            onClick={toggleBookmark}
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" />
        </svg>
    );
};

const defaultOnBookmarkStateChange = () => {
    console.log("defaultOnBookmarkStateChange fired");
};
