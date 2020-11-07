import { UploadProps } from "antd/lib/upload";

export type BaseBookImageDropBoxProps = {
    title?: string;
    subTitle?: string;
};
export type BookImageDropBoxComponentProps = UploadProps &
    BaseBookImageDropBoxProps;
