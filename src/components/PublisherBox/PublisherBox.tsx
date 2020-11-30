import React, { FunctionComponent } from "react";
/* components */
import { Image } from "components/Image";
import { Button } from "components/Button";
import { Text } from "components/Text";
/* modules */
import clsx from "classnames";
/* helpers */
import { conditionalText } from "helpers/conditionalText";
/* assets */
import PublisherImage from "assets/images/book.jpg";
/* types */
import { PublisherBoxComponentProps } from "./PublisherBox.types";
/* styles */
import s from "./PublisherBox.module.scss";

export const PublisherBox: FunctionComponent<PublisherBoxComponentProps> = props => {
    const {
        id: publisherId,
        className,
        title = "",
        description = "",
        initialFollowingState = false,
        imageSrc = PublisherImage,
        onFollow = defaultOnFollow,
        ...restProps
    } = props;

    const SubscriptionTextButtonText = conditionalText(
        initialFollowingState,
        "لغو سابسکریپشن",
        "دنبال کردن"
    );

    return (
        <div className={clsx(s.box, `shadow`, className)} {...restProps}>
            <Image className={s.image} src={imageSrc} />
            <div className={s.content}>
                <Text className={s.title}>{title}</Text>
                <Text className={s.description}>{description}</Text>
                <Button
                    type={initialFollowingState ? "dashed" : "primary"}
                    className="mt-4"
                    danger={initialFollowingState}
                    block
                    size="large"
                    onClick={() => onFollow(publisherId)}
                >
                    {SubscriptionTextButtonText}
                </Button>
            </div>
        </div>
    );
};

const defaultOnFollow = (id: string) => {
    console.log(id);
};
