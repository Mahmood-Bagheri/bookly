import React, { FunctionComponent, useEffect, useState } from "react";
import classnames from "classnames";
import { LikeButtonComponentProps } from "./LikeButton.types";
import s from "./LikeButton.module.scss";

export const LikeButton: FunctionComponent<LikeButtonComponentProps> = props => {
    const [likeState, setLikeState] = useState(false);
    const {
        onLikeStateChange = defaultOnLikeStateChange,
        ...restProps
    } = props;

    const svgColor = classnames(s.like, { [s.black]: likeState });

    const toggleLike = () => {
        setLikeState(previousLikeState => !previousLikeState);
    };

    useEffect(() => onLikeStateChange(likeState), [likeState]);

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
            onClick={toggleLike}
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
        </svg>
    );
};

const defaultOnLikeStateChange = () => {
    console.log("defaultOnLikeStateChange fired");
};
