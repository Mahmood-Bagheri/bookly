import React, { FC } from "react";
/* components */
import { Image } from "components/Image";
import { Button } from "components/Button";
import { Text } from "components/Text";
/* modules */
import clsx from "classnames";
import { Link, RouterLinkProps } from "components/Link";
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

const defaultOnFollow = (id: string) => {
    console.log(id);
};

export const PublisherBox: FC<PublisherBoxComponentProps> = props => {
    const {
        _id: publisherId,
        className,
        title,
        description,
        initialFollowingState = false,
        image,
        onFollow = defaultOnFollow,
        ...restProps
    } = props;

    return (
        <div className={clsx(s.box, `shadow`, className)} {...restProps}>
            <PublisherBoxImage _id={publisherId} image={image} />

            <PublisherBoxContent
                _id={publisherId}
                title={title}
                description={description}
                initialFollowingState={initialFollowingState}
            />
        </div>
    );
};

const PublisherBoxImage = ({
    _id: publisherId,
    image,
}: Pick<PublisherBoxComponentProps, "image" | "_id">) => {
    return (
        <Link<RouterLinkProps>
            permission="publisher.readSingle"
            to={routeTo("publisher", { publisherId })}
        >
            <div className="p-1">
                <Image
                    className={s.image}
                    src={`${process.env.REACT_APP_API_URL}/${image?.filename}`}
                />
            </div>
        </Link>
    );
};

export const PublisherBoxContent = ({
    title,
    description,
    initialFollowingState = false,
    _id: publisherId,
}: Pick<
    PublisherBoxComponentProps,
    "title" | "initialFollowingState" | "description" | "_id"
>) => {
    return (
        <div className={s.content}>
            <Text className={s.title}>{title}</Text>
            <Text className={s.description}>{description}</Text>
            <PublisherBoxFollowButton
                _id={publisherId}
                initialFollowingState={initialFollowingState}
            />
        </div>
    );
};

const PublisherBoxFollowButton = ({
    _id: publisherId,
    initialFollowingState = false,
}: Pick<PublisherBoxComponentProps, "initialFollowingState" | "_id">) => {
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
    );
};
