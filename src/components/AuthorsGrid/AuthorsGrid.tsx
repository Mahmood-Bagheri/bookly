import { FC } from 'react';
/* components */
import { AuthorBox } from 'components/AuthorBox';
import { Col } from 'components/Col';
import { Row } from 'components/Row';
/* modules */
import clsx from 'classnames';
import { map } from 'lodash/fp';
import { useQueryString } from 'hooks/useQueryString';
/* helpers */
import { checkInclusion } from 'helpers/checkInclusion';
/* assets */
/* types */
import { AuthorsGridProps } from './AuthorsGrid.types';
/* styles */
import s from './AuthorsGrid.module.scss';
import { GenericGrid } from 'components/GenericGrid';

export const AuthorsGrid: FC<AuthorsGridProps> = ({ className, authors }) => {
    const [{ query }] = useQueryString();

    const filterBooks = (author: Author.Query.Result) =>
        checkInclusion(author?.name, query as string);
    return (
        <GenericGrid
            withRow
            filter={filterBooks}
            items={authors}
            renderItem={renderAuthorBox}
        />
    );
};

const renderAuthorBox = (author: Author.Query.Result) => {
    return (
        <Col xl={4} sm={6} className='mb-3' key={author._id}>
            <AuthorBox name={author.name} _id={author._id} />
        </Col>
    );
};
