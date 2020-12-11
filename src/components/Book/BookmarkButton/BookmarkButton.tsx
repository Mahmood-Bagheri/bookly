import React, { FC, useEffect } from "react";
/* modules */
import classnames from "classnames";
import { useToggle } from "hooks/useToggle";
/* assets */
import { ReactComponent as BookmarkIcon } from "assets/icons/bookmark.svg";
/* types */
import { BookmarkButtonComponentProps } from "./BookmarkButton.types";
/* styles */
import s from "./BookmarkButton.module.scss";

export const BookmarkButton: FC<BookmarkButtonComponentProps> = ({
    onBookmarkStateChange = defaultOnBookmarkStateChange,
    initialBookmarkState = false,
    ...restProps
}) => {
    const [bookmarkState, toggleBookmarkState] = useToggle(false);
    const svgColor = classnames(s.bookmark, { [s.black]: bookmarkState });
    useEffect(() => onBookmarkStateChange(bookmarkState), [bookmarkState]);

    return (
        <BookmarkIcon
            onClick={toggleBookmarkState}
            className={svgColor}
            {...restProps}
        />
    );
};

const defaultOnBookmarkStateChange = () => {
    console.log("defaultOnBookmarkStateChange fired");
};
