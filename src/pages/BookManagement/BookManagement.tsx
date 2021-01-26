import React, { FC, Fragment } from 'react';
/* components */
import { DocumentTitle } from 'components/DocumentTitle';
import { BookManagementTable } from 'components/BookManagementTable';
/* modules */
import { useBooks } from 'hooks';

const BookManagement: FC = () => {
    const { data: books, isLoading: loading } = useBooks();

    return (
        <Fragment>
            <DocumentTitle title='BookManagement' />
            <BookManagementTable loading={loading} books={books!} />
        </Fragment>
    );
};

export default BookManagement;
