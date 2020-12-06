import React, { FC, Fragment } from "react";
/* components */
import { DocumentTitle } from "components/DocumentTitle";
import { ProfileForm } from "components/ProfileForm";

const Profile: FC = props => {
    return (
        <Fragment>
            <DocumentTitle title="پروفایل" />
            <ProfileForm onSubmit={(v: any) => console.log(v)} />
        </Fragment>
    );
};

export default Profile;
