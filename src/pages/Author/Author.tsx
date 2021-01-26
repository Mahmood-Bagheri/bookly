import React, { FC, Fragment } from 'react';
/* components */
import { DocumentTitle } from 'components/DocumentTitle';
import { BooksGrid } from 'components/Book';
import { AuthorPageTitle } from 'components/AuthorPageTitle';
/* modules */
import { useAuthor } from 'hooks';
import { useParams } from 'react-router-dom';

const Author: FC = () => {
    const { authorId } = useParams<{ authorId: string }>();
    const { data: author, isLoading } = useAuthor(authorId);

    if (!author || isLoading) {
        return <div>در حال دریافت...</div>;
    }
    return (
        <Fragment>
            <DocumentTitle title='Author' />

            <AuthorPageTitle>
                کتاب های نوشته شده توسط {author.name}
            </AuthorPageTitle>

            <BooksGrid books={author?.books} />
        </Fragment>
    );
};

export default Author;
