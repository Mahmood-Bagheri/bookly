import React, { FunctionComponent } from "react";
/* components */
/* modules */
import clsx from "classnames";
/* helpers */
/* assets */
import PublisherImage from "assets/images/book.jpg";
/* types */
import { PublishersGridComponentProps } from "./PublishersGrid.types";
/* styles */
import s from "./PublishersGrid.module.scss";
import { fakeArrayGenerator } from "helpers/fakeArrayGenerator";
import { PublisherBox } from "components/PublisherBox";

export const PublishersGrid: FunctionComponent<PublishersGridComponentProps> = props => {
    const { className, ...restProps } = props;
    return (
        <div className={clsx(s.box, className)} {...restProps}>
            <div className="row">
                {fakeArrayGenerator(10).map(renderPublisher)}
            </div>
        </div>
    );
};

const renderPublisher = (item: unknown) => (
    <div className="col-md-6 col-lg-3 mb-3">
        <PublisherBox
            title="ققنوس"
            description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد"
            imageSrc={PublisherImage}
            initialFollowingState={false}
        />
    </div>
);
