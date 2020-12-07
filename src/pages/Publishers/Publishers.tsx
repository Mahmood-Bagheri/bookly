import React, { FC, Fragment } from "react";
/* components */
import { fakeArrayGenerator } from "helpers/fakeArrayGenerator";
import { PublisherBox } from "components/PublisherBox";
import { usePublishers } from "hooks";
import { DocumentTitle } from "components/DocumentTitle";
import { PublishersGrid } from "components/PublishersGrid";
import { mock } from "helpers/mock";

const Publishers: FC = props => {
    const {
        data: tempPublishers,
        isLoading: publishersIsLoading,
    } = usePublishers();

    return (
        <Fragment>
            <DocumentTitle title="ناشر ها" />
            <PublishersGrid
                publishers={mock("publishers")}
                loading={publishersIsLoading}
            />
        </Fragment>
    );
};

export default Publishers;
