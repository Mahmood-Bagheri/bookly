import React, { FunctionComponent, useEffect, useState } from "react";
/* modules */
import classnames from "classnames";
/* assets */
import { ReactComponent as BookmarkIcon } from "assets/icons/bookmark.svg";
/* types */
import { BookmarkButtonComponentProps } from "./BookmarkButton.types";
/* styles */
import s from "./BookmarkButton.module.scss";

export const BookmarkButton: FunctionComponent<BookmarkButtonComponentProps> = props => {
    const {
        onBookmarkStateChange = defaultOnBookmarkStateChange,
        initialBookmarkState = false,
        ...restProps
    } = props;

    const [bookmarkState, setBookmarkState] = useState(initialBookmarkState);
    const svgColor = classnames(s.bookmark, { [s.black]: bookmarkState });

    const toggleBookmark = () => {
        setBookmarkState(previousLikeState => !previousLikeState);
    };

    useEffect(() => onBookmarkStateChange(bookmarkState), [bookmarkState]);
    return (
        <BookmarkIcon
            onClick={toggleBookmark}
            className={svgColor}
            {...restProps}
        />
    );
};

const defaultOnBookmarkStateChange = () => {
    console.log("defaultOnBookmarkStateChange fired");
};
