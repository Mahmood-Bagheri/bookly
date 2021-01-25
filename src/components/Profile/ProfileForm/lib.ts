import { FormInstance } from "antd/lib/form";
import { DraggerProps } from "antd/lib/upload";

export const getDropboxConfig = (form: FormInstance): DraggerProps => {
    const dropboxConfigsObject: DraggerProps = {
        showUploadList: false,
        multiple: false,
        accept: "image/x-png,image/gif,image/jpeg",
        beforeUpload: file => {
            return false;
        },
        onChange: file => {
            form.setFieldsValue({ image: file.file });
        },
    };

    return dropboxConfigsObject;
};
