import { UploadProps } from "antd/lib/upload";

export type UploadDropboxBaseProps = {
    title?: string;
    subTitle?: string;
};
export type UploadDropboxComponentProps = UploadProps & UploadDropboxBaseProps;
export * from "antd/lib/upload";
