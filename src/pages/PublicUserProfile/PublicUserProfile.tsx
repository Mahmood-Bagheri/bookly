import React, { FC, Fragment } from "react";
/* components */
import { DocumentTitle } from "components/DocumentTitle";
import { UserBox } from "components/UserBox";
import { Row } from "components/Row";
import { Col } from "components/Col";

const UserProfile: FC = props => {
    return (
        <Fragment>
            <DocumentTitle title="پروفایل کاربر" />
            <Row>
                <Col lg={4}>
                    <UserBox
                        name="محمود باقری"
                        role="admin"
                        biography="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت"
                        profileImage="https://source.unsplash.com/500x500/?people"
                    />
                </Col>
            </Row>
        </Fragment>
    );
};

export default UserProfile;
