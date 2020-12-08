import React, { FC } from "react";
/* components */
import { Input, InputProps } from "components/Input";
/* modules */
import clsx from "classnames";
import { useQueryString } from "hooks/useQueryString";
/* helpers */
/* constants */
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

    const inputConfig: InputProps = {
        placeholder: "جست و جو",
        defaultValue: query,
        onChange: event => handleOnChange(event, onSearch),
        onKeyDown: event => handleOnKeyDown(event, onSearch),
    };

    return (
        <div className={clsx(s.box, "mb-3", className)}>
            <Input.Text {...inputConfig} />
        </div>
    );
};

type ChangeEvent = React.ChangeEvent<HTMLInputElement>;
const handleOnChange = (e: ChangeEvent, cb: Function) => {
    if (!e.target.value) {
        cb("");
    }
};

type KeyboardEvent = React.KeyboardEvent<HTMLInputElement>;
const handleOnKeyDown = (e: KeyboardEvent, cb: Function) => {
    if (e.key === "Enter") {
        cb(e.currentTarget.value);
    }
};
