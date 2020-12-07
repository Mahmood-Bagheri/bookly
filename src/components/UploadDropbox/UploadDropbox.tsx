import React, { FC } from "react";
/* components */
import { Upload } from "antd";
/* modules */
import clsx from "classnames";
/* assets */
import { ReactComponent as ImageIcon } from "assets/icons/image.svg";
/* types */
import { UploadDropboxProps } from "./UploadDropbox.types";
import { DraggerProps } from "antd/lib/upload";
/* styles */
import s from "./UploadDropbox.module.scss";

const { Dragger } = Upload;

export const UploadDropbox = React.forwardRef<DraggerProps, UploadDropboxProps>(
    (
        {
            className,
            title = "تصویر را اینجا وِل کنید",
            subTitle = "حداکثر حجم عکس باید 500 کیلوبایت باشد",
            ...restProps
        },
        ref
    ) => {
        return (
            <div className={clsx(s.box, className)}>
                <Dragger {...restProps}>
                    <ImageIcon />
                    <p className={s.title}>{title}</p>
                    <p className={s.description}>{subTitle}</p>
                </Dragger>
            </div>
        );
    }
);
// export const UploadDropbox: FC<UploadDropboxProps> = ({
//     className,
//     title = "تصویر را اینجا وِل کنید",
//     subTitle = "حداکثر حجم عکس باید 500 کیلوبایت باشد",
//     ...restProps
// }) => {
//     return (
//         <div className={clsx(s.box, className)}>
//             <Dragger {...restProps}>
//                 <ImageIcon />
//                 <p className={s.title}>{title}</p>
//                 <p className={s.description}>{subTitle}</p>
//             </Dragger>
//         </div>
//     );
// };
