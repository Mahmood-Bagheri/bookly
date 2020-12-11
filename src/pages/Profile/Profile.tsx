import React, { FC, Fragment } from "react";
/* components */
import { DocumentTitle } from "components/DocumentTitle";
import { ProfileForm } from "components/Profile";
import { useUpdateProfile } from "hooks";

const Profile: FC = props => {
    const [updateProfile, { isLoading }] = useUpdateProfile();
    return (
        <Fragment>
            <DocumentTitle title="پروفایل" />
            <ProfileForm loading={isLoading} onSubmit={updateProfile} />
        </Fragment>
    );
};

export default Profile;
