import React, { FC, Fragment } from "react";
/* components */
import { Row } from "components/Row";
import { Col } from "components/Col";
import { PublisherBox } from "components/PublisherBox";
import { BooksGrid } from "components/BooksGrid";
import { PublisherDescriptionText } from "components/PublisherDescriptionText";
import { uniqueId } from "helpers/uniqueId";
import { useSinglePublisher } from "hooks";
import { useParams } from "react-router-dom";
import { mock } from "helpers/mock";
import { PublisherPageShimmer } from "./PublisherPageShimmer";

const Publisher: FC = props => {
    const { publisherId } = useParams<{ publisherId: string }>();
    const { data, isLoading: loading } = useSinglePublisher(publisherId);

    if (loading) {
        return <PublisherPageShimmer />;
    }

    return (
        <Fragment>
            <Row className="mb-3">
                <Col md={6} lg={3} className="mb-3 ">
                    <PublisherBox.Component
                        id={uniqueId()}
                        imageSrc="https://source.unsplash.com/500x500/?book&sig=8"
                        description="توضیحات پابلیشر"
                        title="ققنوس"
                    />
                </Col>
                <Col lg={9}>
                    <PublisherDescriptionText.Component
                        title="مشخصات ناشر"
                        description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."
                    />
                </Col>
            </Row>
            <BooksGrid books={mock<Book.Base>("books", 4)} />
        </Fragment>
    );
};

export default Publisher;
