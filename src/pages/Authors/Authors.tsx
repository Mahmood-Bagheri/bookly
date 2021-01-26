import React, { FC, Fragment } from 'react';
/* components */
import { DocumentTitle } from 'components/DocumentTitle';
import { useAuthors } from 'hooks';
import { AuthorsGrid } from 'components/AuthorsGrid';

const Authors: FC = () => {
    const { data: authors } = useAuthors();

    if (!authors) {
        return <div>در حال دریافت ...</div>;
    }

    return (
        <Fragment>
            <DocumentTitle title='Authors' />
            <AuthorsGrid authors={authors} />
        </Fragment>
    );
};

export default Authors;
