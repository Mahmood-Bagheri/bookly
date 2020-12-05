import React, { FC, Fragment } from "react";
/* components */
import { DocumentTitle } from "components/DocumentTitle";
import { BooksGrid } from "components/BooksGrid";
/* modules */
import { useBooks } from "hooks";
import { mock } from "helpers/mock";
import { useHistory } from "react-router-dom";
import qs from "qs";
import { get } from "lodash";

const Home: FC = props => {
    const { isLoading, data } = useBooks();
    const { location } = useHistory();

    const queryText = get(
        qs.parse(location.search, { ignoreQueryPrefix: true }),
        "queryText"
    );

    return (
        <Fragment>
            <DocumentTitle title="خانه" />
            <BooksGrid
                books={mock<Book.Base>("books", 12)}
                loading={isLoading}
            />
        </Fragment>
    );
};

export default Home;
