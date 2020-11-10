import React, { FC, Fragment } from "react";
/* components */
import { DocumentTitle } from "components/DocumentTitle";
import { BooksGrid } from "components/BooksGrid";
/* modules */
import { fakeArrayGenerator } from "helpers/fakeArrayGenerator";

const Home: FC = props => {
    const books = fakeArrayGenerator(12);
    return (
        <Fragment>
            <DocumentTitle title="homepage" />
            <BooksGrid books={books as any} loading={false} />
        </Fragment>
    );
};

export default Home;
