import React, { FC, Fragment } from "react";
/* components */
import { DocumentTitle } from "components/DocumentTitle";
import { BooksGrid } from "components/Book/BooksGrid";
import { Row } from "components/Row";
import { Col } from "components/Col";
import { CategoryDetailsBox } from "components/CategoryDetailsBox";
/* mocks */
import { mock } from "helpers/mock";
/* modules */
import { useParams } from "react-router-dom";
import { useCategoryBooks } from "hooks";
/* helpers */
import { uniqueId } from "helpers/uniqueId";

const Category: FC = props => {
    const { categoryId } = useParams<{ categoryId: string }>();
    const { isLoading, data } = useCategoryBooks(categoryId);

    return (
        <Fragment>
            <DocumentTitle title="Category" />
            <Row>
                <Col lg={4}>
                    <CategoryDetailsBox
                        categoryTitle="رُمان"
                        description="توضیحات دسته بندی"
                        imageSrc={`https://source.unsplash.com/500x500/?book&sig=${uniqueId()}`}
                        loading={isLoading}
                    />
                </Col>
                <Col lg={8}>
                    <BooksGrid
                        books={mock<Book.Base>("books", 12)}
                        loading={isLoading}
                    />
                </Col>
            </Row>
        </Fragment>
    );
};

export default Category;
