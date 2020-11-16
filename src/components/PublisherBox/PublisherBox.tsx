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
import { Col } from "components/Col";
import { conditionalText } from "helpers/conditionalText";

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

    return (
        <Col md={6} lg={3} className="mb-3">
            <div className={clsx(s.box, `shadow`, className)} {...restProps}>
                <Image className={s.image} src={imageSrc} />
                <div className={s.content}>
                    <p className={s.title}>{title}</p>
                    <span className={s.description}>{description}</span>
                    <Button
                        type={initialFollowingState ? "dashed" : "primary"}
                        className="mt-4"
                        danger={initialFollowingState}
                        block
                        size="large"
                        onClick={() => onFollow(publisherId)}
                    >
                        {conditionalText(
                            initialFollowingState,
                            "لغو سابسکریپشن",
                            "دنبال کردن"
                        )}
                    </Button>
                </div>
            </div>
        </Col>
    );
};

const defaultOnFollow = (id: string) => {
    console.log(id);
};
