import React, { FC, Fragment } from "react";
/* components */
import { DocumentTitle } from "components/DocumentTitle";
import { BooksGrid } from "components/Book";
import { withUserLayout } from "components/UserLayout";
/* modules */
import { useBooks } from "hooks";
import { mock } from "helpers/mock";

const Home: FC = props => {
    const { data, isFetched } = useBooks();

    return (
        <Fragment>
            <DocumentTitle title="خانه">
                <meta
                    name="description"
                    content="لیست عکس های ثبت شده توسط کاربران"
                />
                <meta name="keywords" content="book, scientific books" />
            </DocumentTitle>
            <BooksGrid
                books={mock<Book.Base>("books", 12)}
                loading={!isFetched}
            />
        </Fragment>
    );
};

export default withUserLayout(Home);
