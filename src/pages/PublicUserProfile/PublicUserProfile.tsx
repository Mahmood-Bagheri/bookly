import React, { FC, Fragment } from "react";
/* components */
import { DocumentTitle } from "components/DocumentTitle";
import { UserBox } from "components/UserBox";
import { Row } from "components/Row";
import { Col } from "components/Col";
import { usePublicUserProfile } from "hooks";
import { useParams } from "react-router-dom";
import { BooksGrid } from "components/Book";
import { mock } from "helpers/mock";
import { randomDate } from "helpers/randomDate";
import { generateFakeImageUrl } from "helpers/generateFakeImageUrl";

const UserProfile: FC = props => {
    const { userId } = useParams<{ userId: string }>();
    const { isLoading: profileLoading, data } = usePublicUserProfile(userId);

    return (
        <Fragment>
            <DocumentTitle title="پروفایل کاربر" />
            <Row>
                <Col md={5} lg={4}>
                    <UserBox
                        name={data?.name!}
                        role={data?.role!}
                        biography={
                            data?.biography || "بیوگرافی ثبت نشده است :)"
                        }
                        profileImage={generateFakeImageUrl()}
                        loading={profileLoading}
                        registerDate={data?.createdAt || new Date()}
                    />
                </Col>
                <Col md={7} lg={8}>
                    <BooksGrid loading={profileLoading} books={data?.books!} />
                </Col>
            </Row>
        </Fragment>
    );
};

export default UserProfile;
