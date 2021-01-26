import React, { FC, Fragment } from 'react';
/* components */
import { DocumentTitle } from 'components/DocumentTitle';
import { BooksGrid } from 'components/Book';
import { withUserLayout } from 'components/UserLayout';
/* modules */
import { useBooks } from 'hooks';
import { mock } from 'helpers/mock';

const Home: FC = props => {
    const { data, isLoading } = useBooks();

    if (isLoading || !data) {
        return <div></div>;
    }

    return (
        <Fragment>
            <DocumentTitle title='خانه'>
                <meta
                    name='description'
                    content='لیست عکس های ثبت شده توسط کاربران'
                />
                <meta name='keywords' content='book, scientific books' />
            </DocumentTitle>
            <BooksGrid books={data} loading={isLoading} />
        </Fragment>
    );
};

export default withUserLayout(Home);
