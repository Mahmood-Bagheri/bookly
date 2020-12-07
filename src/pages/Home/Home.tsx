import React, { FC, Fragment } from "react";
/* components */
import { DocumentTitle } from "components/DocumentTitle";
import { BooksGrid } from "components/BooksGrid";
/* modules */
import { useBooks } from "hooks";
import { mock } from "helpers/mock";
import { useHistory } from "react-router-dom";

const Home: FC = props => {
    const { isLoading, data } = useBooks();
    const { location } = useHistory();

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
