import React, { FC, Fragment } from 'react';
/* components */
import { BooksGrid } from 'components/Book';
import { mock } from 'helpers/mock';

const UserProfileLikedBooks: FC = props => {
    return (
        <Fragment>
            <BooksGrid books={mock('books')} />
        </Fragment>
    );
};

export default UserProfileLikedBooks;
