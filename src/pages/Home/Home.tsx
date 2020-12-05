import React, { FC, Fragment } from "react";
/* components */
import { DocumentTitle } from "components/DocumentTitle";
import { BooksGrid } from "components/BooksGrid";
import { FeedFilterBox } from "components/FeedFilterBox";
/* modules */
import { useBooks } from "hooks";
import { mock } from "helpers/mock";

const Home: FC = props => {
    const { isLoading, data } = useBooks();

    return (
        <Fragment>
            <DocumentTitle title="homepage" />
            {isLoading && <FeedFilterBox.Shimmer />}
            {!isLoading && <FeedFilterBox.Component />}
            <BooksGrid
                books={mock<Book.Base>("books", 12)}
                loading={isLoading}
            />
        </Fragment>
    );
};

export default Home;
