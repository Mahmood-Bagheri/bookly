import React, { FunctionComponent } from "react";
/* components */
import { UploadDropbox } from "components/UploadDropbox";
import { ProfileImageDropBoxComponentProps } from "./ProfileImageDropBox.types";
import s from "./ProfileImageDropBox.module.scss";

export const ProfileImageDropBox: FunctionComponent<ProfileImageDropBoxComponentProps> = props => {
    return (
        <UploadDropbox
            title="تصویر پروفایل"
            subTitle="حداکثر حجم تصویر باید 1 مگابایت باشد"
            {...props}
        />
    );
};
