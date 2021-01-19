import React, { FC, Fragment } from "react";
/* components */
import { DocumentTitle } from "components/DocumentTitle";
import { BooksGrid } from "components/Book";
import { Row } from "components/Row";
import { Col } from "components/Col";
import { CategoryDetailsBox } from "components/Category";
/* mocks */
import { mock } from "helpers/mock";
/* modules */
import { useParams } from "react-router-dom";
import { useCategoryBooks } from "hooks";
/* helpers */
import { generateFakeImageUrl } from "helpers/generateFakeImageUrl";

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
                        imageSrc={generateFakeImageUrl()}
                        loading={isLoading}
                    />
                </Col>
                <Col lg={8}>
                    <BooksGrid
                        books={mock<Book.Query.Result>("books", 12)}
                        loading={isLoading}
                    />
                </Col>
            </Row>
        </Fragment>
    );
};

export default Category;
