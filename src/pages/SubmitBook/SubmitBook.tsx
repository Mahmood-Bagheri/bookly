import React, { FC, Fragment } from 'react';
/* components */
import { DocumentTitle } from 'components/DocumentTitle';
import { SubmitBookForm } from 'components/SubmitBookForm';
import { useSubmitBook } from 'hooks';
import { useParams } from 'react-router-dom';

const SubmitBook: FC = () => {
    const [submitBook, { isLoading }] = useSubmitBook();
    const { bookId } = useParams<Book.Id>();

    return (
        <Fragment>
            <DocumentTitle title='ثبت کتاب' />
            {bookId}
            <SubmitBookForm loading={isLoading} onSubmit={submitBook} />
        </Fragment>
    );
};

export default SubmitBook;
