import React, { FunctionComponent, useState } from "react";
/* components */
/* modules */
import clsx from "classnames";
/* helpers */
/* assets */
/* types */
import { CollapsibleTextComponentProps } from "./CollapsibleText.types";
/* styles */
import s from "./CollapsibleText.module.scss";

export const CollapsibleText: FunctionComponent<CollapsibleTextComponentProps> = props => {
    const { className, ...restProps } = props;
    const [showMore, setShowMore] = useState(false);
    const togleShowMore = () => {
        setShowMore(previousShowMoreState => !previousShowMoreState);
    };
    const showMoreText = !showMore ? "نمایش بیشتر" : "نمایش کمتر";
    const bodyClsx = clsx({ truncate: !showMore, fullWidth: showMore }, s.body);
    const wrapClsx = clsx(
        { "align-items-center": !showMore },
        { "flex-column": showMore },
        s.commentBoxBodyWrap,
        className
    );
    return (
        <div className={wrapClsx} {...restProps}>
            <div className={bodyClsx}>{props.children}</div>
            <span className={s.showMore} onClick={togleShowMore}>
                {showMoreText}
            </span>
        </div>
    );
};
