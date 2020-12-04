import React, { FunctionComponent } from "react";
/* components */
import { Image } from "components/Image";
import { Button } from "components/Button";
import { Text } from "components/Text";
/* modules */
import clsx from "classnames";
import { Link } from "react-router-dom";
/* helpers */
import { conditionalText } from "helpers/conditionalText";
import { routeTo } from "helpers/routeTo";
/* assets */
import PublisherImage from "assets/images/book.jpg";
/* types */
import { PublisherBoxComponentProps } from "./PublisherBox.types";
/* styles */
import s from "./PublisherBox.module.scss";
import { useFollowPublisher } from "hooks";

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

    const [
        follow,
        { isLoading: followPublisherIsLoading },
    ] = useFollowPublisher();
    const SubscriptionTextButtonText = conditionalText(
        initialFollowingState,
        "لغو سابسکریپشن",
        "دنبال کردن"
    );

    return (
        <div className={clsx(s.box, `shadow`, className)} {...restProps}>
            <Link to={routeTo("publisher", { publisherId })}>
                <Image className={s.image} src={imageSrc} />
            </Link>
            <div className={s.content}>
                <Text className={s.title}>{title}</Text>
                <Text className={s.description}>{description}</Text>
                <Button
                    type={initialFollowingState ? "dashed" : "primary"}
                    className="mt-4"
                    danger={initialFollowingState}
                    block
                    size="large"
                    onClick={() => follow({ publisherId })}
                    loading={followPublisherIsLoading}
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
