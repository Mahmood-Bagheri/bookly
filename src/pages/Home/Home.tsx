import React, { FC, Fragment } from "react";
/* components */
import { DocumentTitle } from "components/DocumentTitle";
import { BooksGrid } from "components/BooksGrid";
/* modules */
import { useBooks } from "hooks";
import { mock } from "helpers/mock";

const Home: FC = props => {
    const { data, isFetched } = useBooks();

    return (
        <Fragment>
            <DocumentTitle title="خانه" />
            <BooksGrid
                books={mock<Book.Base>("books", 12)}
                loading={!isFetched}
            />
        </Fragment>
    );
};

export default Home;
