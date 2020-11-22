import React, { FC, Fragment } from "react";
/* components */
import { DocumentTitle } from "components/DocumentTitle";
import { BooksGrid } from "components/BooksGrid";
/* modules */
import { Book } from "components/BookBox";

const Home: FC = props => {
    const books: Book[] = [
        {
            author: "محمود باقری",
            id: "1",
            initialLikeState: false,
            title: "به تو می اندیشم",
            imageSrc: "https://source.unsplash.com/500x500/?book&sig=1",
        },
    ];

    return (
        <Fragment>
            <DocumentTitle title="homepage" />
            <BooksGrid books={books} loading={false} />
        </Fragment>
    );
};

export default Home;
