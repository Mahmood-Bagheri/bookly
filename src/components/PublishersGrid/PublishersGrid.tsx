import React, { FunctionComponent } from "react";
/* components */
/* modules */
import clsx from "classnames";
/* types */
import { PublishersGridComponentProps } from "./PublishersGrid.types";
/* styles */
import s from "./PublishersGrid.module.scss";
import { fakeArrayGenerator } from "helpers/fakeArrayGenerator";
import { PublisherBox } from "components/PublisherBox";
import { Container } from "components/Container";
import { Row } from "components/Row";

export const PublishersGrid: FunctionComponent<PublishersGridComponentProps> = props => {
    const { className, ...restProps } = props;
    return (
        <Container className={clsx(s.box, className)} {...restProps}>
            <Row>{fakeArrayGenerator(10).map(renderPublisher)}</Row>
        </Container>
    );
};

const renderPublisher = (item: unknown, index: number) => (
    <PublisherBox
        id="123"
        title="ققنوس"
        description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد"
        imageSrc={`https://source.unsplash.com/500x500/?book&sig=${index}`}
        initialFollowingState={false}
        onFollow={publisherId => console.log(publisherId)}
    />
);
