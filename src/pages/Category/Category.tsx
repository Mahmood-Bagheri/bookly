import React, { FC, Fragment } from "react";
/* components */
import { DocumentTitle } from "components/DocumentTitle";
/* modules */
import { useParams } from "react-router-dom";
import { BooksGrid } from "components/BooksGrid";
import { Book } from "components/BookBox";
import { TopBar } from "components/TopBar";

const Category: FC = props => {
    const { categoryId } = useParams<{ categoryId: string }>();
    const books: Book[] = [
        {
            author: "محمود باقری",
            id: "1",
            initialLikeState: true,
            title: "به تو می اندیشم",
            imageSrc: "https://source.unsplash.com/500x500/?book&sig=1",
        },
        {
            author: "محمود باقری",
            id: "2",
            initialLikeState: false,
            title: "به تو می اندیشم",
            imageSrc: "https://source.unsplash.com/500x500/?book&sig=2",
        },
    ];

    return (
        <Fragment>
            <DocumentTitle title="Category" />
            <BooksGrid books={books} loading={false} />
        </Fragment>
    );
};

export default Category;
