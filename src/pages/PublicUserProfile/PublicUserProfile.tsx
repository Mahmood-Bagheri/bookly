import React, { FC, Fragment } from "react";
/* components */
import { DocumentTitle } from "components/DocumentTitle";
import { UserBox } from "components/UserBox";
import { Row } from "components/Row";
import { Col } from "components/Col";
import { usePublicUserProfile } from "hooks";
import { useParams } from "react-router-dom";
import { BooksGrid } from "components/BooksGrid";
import { mock } from "helpers/mock";
import { randomDate } from "helpers/randomDate";

const UserProfile: FC = props => {
    const { userId } = useParams<{ userId: string }>();
    const { isLoading: profileLoading, data } = usePublicUserProfile(userId);

    return (
        <Fragment>
            <DocumentTitle title="پروفایل کاربر" />
            <Row>
                <Col md={6} lg={4}>
                    <UserBox
                        name="محمود باقری"
                        role="admin"
                        biography="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت"
                        profileImage="https://source.unsplash.com/500x500/?people"
                        loading={profileLoading}
                        registerDate={randomDate(new Date("10/10/2010"))}
                    />
                </Col>
                <Col md={6} lg={8}>
                    <BooksGrid
                        loading={profileLoading}
                        books={mock("books", 12)}
                    />
                </Col>
            </Row>
        </Fragment>
    );
};

export default UserProfile;
