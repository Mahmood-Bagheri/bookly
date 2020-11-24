import React, { FunctionComponent } from "react";
/* components */
import { Spinner } from "components/Spinner";
/* modules */
import classnames from "classnames";
/* assets */
import { ReactComponent as LikeIcon } from "assets/icons/like.svg";
/* types */
import { LikeButtonComponentProps } from "./LikeButton.types";
/* styles */
import s from "./LikeButton.module.scss";
import { SpinIndicator } from "antd/lib/spin";

export const LikeButton: FunctionComponent<LikeButtonComponentProps> = props => {
    const {
        onLikeStateChange = defaultOnLikeStateChange,
        initialLikeState = false,
        loading,
        ...restProps
    } = props;
    const svgColor = classnames(s.like, { [s.black]: initialLikeState });

    const toggleLike = () => {
        onLikeStateChange(initialLikeState);
    };

    if (loading) {
        return <Spinner />;
    }

    return (
        <LikeIcon {...restProps} className={svgColor} onClick={toggleLike} />
    );
};

const defaultOnLikeStateChange = () => {
    console.log("defaultOnLikeStateChange fired");
};
