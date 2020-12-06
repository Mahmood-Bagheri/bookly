import React, { FC } from "react";
/* components */
import { Input } from "components/Input";
/* modules */
import clsx from "classnames";
import { useQueryString } from "hooks/useQueryString";
/* helpers */
/* constants */
import { QS_KEYS } from "constants/qs";
/* assets */
/* types */
import { FeedFilterBoxProps } from "./FeedFilterBox.types";
/* styles */
import s from "./FeedFilterBox.module.scss";

export const FeedFilterBox: FC<FeedFilterBoxProps> = ({
    className,
    onSearch,
    ...restProps
}) => {
    const query = useQueryString("query");

    return (
        <div className={clsx(s.box, "mb-3", className)}>
            <Input.Text
                defaultValue={query}
                placeholder="جست و جو"
                onKeyDown={e => {
                    if (e.key === "Enter") {
                        onSearch(e.currentTarget.value);
                    }
                }}
            />
        </div>
    );
};
