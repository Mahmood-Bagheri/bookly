import React, { FC, Fragment } from 'react';
/* components */
import { DocumentTitle } from 'components/DocumentTitle';
import { ProfileForm } from 'components/Profile';
import { useProfile, useUpdateProfile } from 'hooks';

const Profile: FC = props => {
    const [updateProfile, { isLoading }] = useUpdateProfile();
    const { data: profile, isLoading: profileLoading } = useProfile();

    if (profileLoading) {
        return <div>در حال دریافت...</div>;
    }

    return (
        <Fragment>
            <DocumentTitle title='پروفایل' />
            <ProfileForm
                initialProfile={profile}
                loading={profileLoading}
                onSubmit={updateProfile}
            />
        </Fragment>
    );
};

export default Profile;
