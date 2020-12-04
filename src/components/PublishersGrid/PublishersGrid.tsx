import React, { FunctionComponent } from "react";
/* components */
import { PublisherBox } from "components/PublisherBox";
import { GenericGrid } from "components/GenericGrid";
/* modules */
import { fakeArrayGenerator } from "helpers/fakeArrayGenerator";
import clsx from "classnames";
/* types */
import { PublishersGridComponentProps } from "./PublishersGrid.types";
/* styles */
import s from "./PublishersGrid.module.scss";

export const PublishersGrid: FunctionComponent<PublishersGridComponentProps> = props => {
    const { className, ...restProps } = props;
    return (
        <GenericGrid
            withRow
            items={fakeArrayGenerator(10)}
            renderItem={renderPublisher}
        />
    );
};

const renderPublisher = (item: any) => (
    <PublisherBox.Component
        id="123"
        title="ققنوس"
        description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد"
        imageSrc={`https://source.unsplash.com/500x500/?book&sig=1`}
        initialFollowingState={false}
        onFollow={publisherId => console.log(publisherId)}
    />
);
