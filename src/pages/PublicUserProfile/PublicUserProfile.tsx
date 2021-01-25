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
    const { isLoading: profileLoading, data: profile } = usePublicUserProfile(
        userId
    );

    if (profileLoading || !profile) {
        return <div className="text-center">در حال دریافت</div>;
    }

    return (
        <Fragment>
            <DocumentTitle title="پروفایل کاربر" />
            <Row>
                <Col md={5} lg={4}>
                    <UserBox
                        _id={profile?._id}
                        biography={profile?.biography}
                        createdAt={profile?.createdAt}
                        updatedAt={profile?.updatedAt}
                        image={profile?.image}
                        name={profile?.name}
                        role={profile?.role}
                    />
                </Col>
                <Col md={7} lg={8}>
                    <BooksGrid
                        loading={profileLoading}
                        books={profile?.books!}
                    />
                </Col>
            </Row>
        </Fragment>
    );
};

export default UserProfile;
