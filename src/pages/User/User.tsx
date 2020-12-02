import React, { FC, Fragment } from "react";
/* components */
import { DocumentTitle } from "components/DocumentTitle";
import { useParams } from "react-router-dom";

const User: FC = props => {
    const { userId } = useParams<{ userId: string }>();
    return (
        <Fragment>
            <DocumentTitle title="User" />
            نمایش اطلاعات کاربر با آی دی {userId}
        </Fragment>
    );
};

export default User;
