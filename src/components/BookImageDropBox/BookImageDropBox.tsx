import React, { FunctionComponent } from "react";
import { ReactComponent as ImaegIcon } from "assets/icons/image.svg";
import { BookImageDropBoxComponentProps } from "./BookImageDropBox.types";
import s from "./BookImageDropBox.module.scss";

export const BookImageDropBox: FunctionComponent<BookImageDropBoxComponentProps> = props => {
    return (
        <div className={`${s.box} shadow`}>
            <div className={s.content}>
                <ImaegIcon className={s.icon} />
                <div className={s.title}>تصویر را اینجا وِل کنید</div>
                <div className={s.description}>
                    حداکثر حجم عکس باید 500 کیلوبایت باشد
                </div>
            </div>
        </div>
    );
};
