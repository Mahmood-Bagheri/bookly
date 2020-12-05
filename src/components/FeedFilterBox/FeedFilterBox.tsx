import React, { FC } from "react";
/* components */
import { Input } from "components/Input";
/* modules */
import clsx from "classnames";
import { useHistory } from "react-router-dom";
import { get } from "lodash";
import qs from "qs";
/* helpers */
/* assets */
/* types */
import { FeedFilterBoxProps } from "./FeedFilterBox.types";
/* styles */
import s from "./FeedFilterBox.module.scss";
import { QS_KEYS } from "constants/qs";

export const FeedFilterBox: FC<FeedFilterBoxProps> = ({
    className,
    onSearch,
    ...restProps
}) => {
    const { location } = useHistory();
    const queryText = get(
        qs.parse(location.search, { ignoreQueryPrefix: true }),
        QS_KEYS.feed
    );

    return (
        <div className={clsx(s.box, "mb-3", className)}>
            <Input
                defaultValue={queryText as string}
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
