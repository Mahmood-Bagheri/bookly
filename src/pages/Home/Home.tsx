import React, { FC, Fragment } from "react";
/* components */
import { DocumentTitle } from "components/DocumentTitle";
import { BooksGrid } from "components/BooksGrid";
import { LoadingIndicator } from "components/LoadingIndicator";
/* modules */
import { useBooks } from "hooks/operations/read/readBooks";
import { mock } from "helpers/mock";
import { Book } from "components/BookBox";

const Home: FC = props => {
    const { isLoading, data } = useBooks();
    if (isLoading) {
        return <LoadingIndicator />;
    }
    return (
        <Fragment>
            <DocumentTitle title="homepage" />
            <BooksGrid books={mock<Book>("books")} loading={false} />
        </Fragment>
    );
};

export default Home;
