import React, { FunctionComponent } from "react";
/* components */
import { PublisherBox } from "components/Publisher";
import { GenericGrid } from "components/GenericGrid";
/* modules */
import { useQueryString } from "hooks/useQueryString";
import { includes } from "lodash";
/* helpers */
import { checkInclusion } from "helpers/checkInclusion";
/* types */
import { PublishersGridComponentProps } from "./PublishersGrid.types";
/* styles */
import s from "./PublishersGrid.module.scss";
import { Col } from "components/Col";
import { Publisher } from "types/publisher";
import { PublisherBoxComponentProps } from "../PublisherBox";
import { publishers } from "mock";

export const PublishersGrid: FunctionComponent<PublishersGridComponentProps> = ({
    loading,
    publishers,
}) => {
    const [{ query }] = useQueryString();

    const filterPublishers = (publisher: Publisher.Query.Result) =>
        checkInclusion(publisher.title, query as string);

    if (loading) {
        return <PublisherBox.ShimmerGrid />;
    }
    return (
        <GenericGrid<Publisher.Query.Result>
            withRow
            items={publishers}
            filter={filterPublishers}
            renderItem={item => renderPublisher(item, flowing as any)}
        />
    );
};

const renderPublisher = (
    publisher: PublisherBoxComponentProps,
    followings: Publisher.Query.Result[]
) => (
    <Col xl={4} lg={4} md={6} className="mb-3">
        <PublisherBox.Component
            _id={publisher._id}
            title={publisher.title}
            createdAt={publisher.createdAt}
            updatedAt={publisher.updatedAt}
            description={publisher.description}
            followers={publisher.followers}
            image={publisher.image}
            initialFollowingState={getPublisherFollowingState(
                publisher._id,
                followings
            )}
            onFollow={publisherId => console.log(publisherId)}
            books={publisher.books}
        />
    </Col>
);

const getPublisherFollowingState = (
    publisherId: string,
    followings: Publisher.Query.Result[]
) => {
    const followingIds = followings.map(item => item._id);
    return includes(followingIds, publisherId);
};

const flowing = [
    {
        _id: "60070f722b49d934d472ff59",
        books: [{}],
        followers: [
            {
                _id: "600572f7126669293811482f",
                name: "محمود",
            },
        ],
        description: "This is a sample description",
        title: "Qoqnus",
        createdAt: "2021-01-19T16:57:22.086Z",
        updatedAt: "2021-01-22T08:11:59.059Z",
        image: {
            _id: "60056efd5490dd18fc338f80",
            fieldname: "file",
            originalname: "Book.jpg",
            encoding: "7bit",
            mimetype: "image/jpeg",
            destination: "./uploads",
            filename: "949190ff-846d-45cf-b9c3-fb2386f1020d.Book.jpg",
            path: "uploads\\949190ff-846d-45cf-b9c3-fb2386f1020d.Book.jpg",
            size: 2344994,
            createdAt: "2021-01-18T11:20:29.479Z",
            updatedAt: "2021-01-18T11:20:29.479Z",
            src: "",
        },
    },
];
