import React, { FunctionComponent } from "react";
/* components */
import { Select as AntDesignSelect } from "antd";
/* modules */
import clsx from "classnames";
/* types */
import { SelectComponentProps } from "./Select.types";
/* styles */
import s from "./Select.module.scss";

export const Select: FunctionComponent<SelectComponentProps> = props => {
    const { className, ...restProps } = props;

    return (
        <AntDesignSelect
            className={clsx(s.select, className)}
            {...restProps}
        ></AntDesignSelect>
    );
};
