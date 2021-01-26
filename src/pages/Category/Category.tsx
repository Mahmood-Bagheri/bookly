import React, { FC, Fragment } from 'react';
/* components */
import { DocumentTitle } from 'components/DocumentTitle';
import { BooksGrid } from 'components/Book';
import { Row } from 'components/Row';
import { Col } from 'components/Col';
import { CategoryDetailsBox } from 'components/Category';
/* mocks */
import { mock } from 'helpers/mock';
/* modules */
import { useParams } from 'react-router-dom';
import { useCategoryBooks } from 'hooks';
/* helpers */
import { generateFakeImageUrl } from 'helpers/generateFakeImageUrl';

const Category: FC = props => {
    const { categoryId } = useParams<{ categoryId: string }>();
    const { data: category, isLoading } = useCategoryBooks(categoryId);

    if (!category || isLoading) {
        return <div></div>;
    }

    return (
        <Fragment>
            <DocumentTitle title='Category' />
            <Row>
                <Col lg={4}>
                    <CategoryDetailsBox
                        categoryTitle={category.title}
                        imageSrc={generateFakeImageUrl()}
                        loading={isLoading}
                    />
                </Col>
                <Col lg={8}>
                    <BooksGrid books={category?.books} loading={isLoading} />
                </Col>
            </Row>
        </Fragment>
    );
};

export default Category;
