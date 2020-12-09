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
import { isNullOrEmptyString } from "helpers/isNullOrEmptyString";
import { KeyboardKeys } from "types/global";

export const FeedFilterBox: FC<FeedFilterBoxProps> = ({
    className,
    onSearch,
}) => {
    const [{ query }] = useQueryString();

    const inputConfig: InputProps = {
        placeholder: "جست و جو",
        defaultValue: query as string,
        onChange: event => handleOnChange(event, onSearch),
        onKeyDown: event => handleOnKeyDown(event, onSearch),
    };

    return (
        <div className={clsx(s.box, "mb-3", className)}>
            <Input.Text {...inputConfig} />
        </div>
    );
};

const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    callback: (text: string) => void
) => {
    if (isNullOrEmptyString(e.target.value)) callback("");
};

const handleOnKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    callback: (text: string) => void
) => {
    switch (e.key as KeyboardKeys) {
        case "Enter":
            return callback(e.currentTarget.value);
        case "Escape":
            return callback("");
        default:
            return;
    }
};
