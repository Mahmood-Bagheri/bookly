import React, { FunctionComponent, useEffect, useState } from "react";
/* modules */
import classnames from "classnames";
/* assets */
import { ReactComponent as LikeIcon } from "assets/icons/like.svg";
/* types */
import { LikeButtonComponentProps } from "./LikeButton.types";
/* styles */
import s from "./LikeButton.module.scss";

export const LikeButton: FunctionComponent<LikeButtonComponentProps> = props => {
    const {
        onLikeStateChange = defaultOnLikeStateChange,
        initialLikeState = false,
        ...restProps
    } = props;
    const [likeState, setLikeState] = useState(initialLikeState);
    const svgColor = classnames(s.like, { [s.black]: likeState });

    const toggleLike = () => {
        setLikeState(previousLikeState => !previousLikeState);
    };

    useEffect(() => {
        onLikeStateChange(likeState!);
    }, [likeState]);

    return (
        <LikeIcon {...restProps} className={svgColor} onClick={toggleLike} />
    );
};

const defaultOnLikeStateChange = () => {
    console.log("defaultOnLikeStateChange fired");
};
