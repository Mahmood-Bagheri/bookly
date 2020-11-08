import React, { FunctionComponent } from "react";
/* components */
import { Image } from "components/Image";
import { Button } from "components/Button";
/* modules */
import clsx from "classnames";
/* helpers */
/* assets */
import PublisherImage from "assets/images/book.jpg";
/* types */
import { PublisherBoxComponentProps } from "./PublisherBox.types";
/* styles */
import s from "./PublisherBox.module.scss";

export const PublisherBox: FunctionComponent<PublisherBoxComponentProps> = props => {
    const {
        className,
        title = "",
        description = "",
        imageSrc = PublisherImage,
        onFollow = defaultOnFollow,
        initialFollowingState = false,
        ...restProps
    } = props;

    return (
        <div className={clsx(s.box, `shadow`, className)} {...restProps}>
            <Image className={s.image} src={PublisherImage} />
            <p className={s.title}>{title}</p>
            <span className={s.description}>{description}</span>
            <Button
                type={initialFollowingState ? "dashed" : "primary"}
                className="mt-4"
                danger={initialFollowingState}
                block
                size="large"
                onClick={() => onFollow(123)}
            >
                {initialFollowingState ? "لغو سابسکریپشن" : "دنبال کردن"}
            </Button>
        </div>
    );
};

const defaultOnFollow = (id: number) => {
    console.log(id);
};
