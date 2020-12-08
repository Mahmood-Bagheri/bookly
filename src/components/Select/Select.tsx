import React, { FC } from "react";
/* components */
import { Select as AntDesignSelect } from "antd";
/* modules */
import clsx from "classnames";
/* types */
import { SelectProps } from "antd/lib/select";
/* styles */
import s from "./Select.module.scss";

export const Select = <T extends string | number>({
    children,
    className,
    ...restProps
}: SelectProps<T>) => {
    return (
        <AntDesignSelect
            allowClear
            showSearch
            size="large"
            className={clsx(s.select, className)}
            {...restProps}
        />
    );
};
