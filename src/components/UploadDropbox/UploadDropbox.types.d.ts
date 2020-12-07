import { DraggerProps } from "antd/lib/upload";

export type UploadDropboxBaseProps = {
    title?: string;
    subTitle?: string;
};
export type UploadDropboxProps = Omit<
    DraggerProps,
    keyof UploadDropboxBaseProps
> &
    UploadDropboxBaseProps;
