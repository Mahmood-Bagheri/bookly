import React, { FC, Fragment } from "react";
/* components */
import { DocumentTitle } from "components/DocumentTitle";
import { ProfileForm } from "components/ProfileForm";
import { useUpdateProfile } from "hooks";

const Profile: FC = props => {
    const [updateProfile, { isLoading }] = useUpdateProfile();
    return (
        <Fragment>
            <DocumentTitle title="پروفایل" />
            <ProfileForm
                loading={isLoading}
                onSubmit={(v: any) => updateProfile(v)}
            />
        </Fragment>
    );
};

export default Profile;
