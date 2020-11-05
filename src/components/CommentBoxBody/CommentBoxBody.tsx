import React, { FunctionComponent, useState } from "react";
/* modules */
import classnames from "classnames";
/* types */
import { CommentBoxBodyComponentProps } from "./CommentBoxBody.types";
/* styles */
import s from "./CommentBoxBody.module.scss";

export const CommentBoxBody: FunctionComponent<CommentBoxBodyComponentProps> = props => {
    const [showMore, setShowMore] = useState(false);
    const togleShowMore = () => {
        setShowMore(previousShowMoreState => !previousShowMoreState);
    };
    const showMoreText = !showMore ? "نمایش بیشتر" : "نمایش کمتر";
    const bodyClsx = classnames(
        { truncate: !showMore, fullWidth: showMore },
        s.body
    );
    const wrapClsx = classnames(
        { "align-items-center": !showMore },
        { "flex-column": showMore },
        s.commentBoxBodyWrap
    );
    return (
        <div className={wrapClsx}>
            <div className={bodyClsx}>{props.children}</div>
            <span className={s.showMore} onClick={togleShowMore}>
                {showMoreText}
            </span>
        </div>
    );
};
