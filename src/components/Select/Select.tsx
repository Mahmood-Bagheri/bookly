import React, { FunctionComponent } from "react";
import { Select as AntDesignSelect } from "antd";
import { SelectComponentProps } from "./Select.types";
import s from "./Select.module.scss";
const { Option } = AntDesignSelect;

export const Select: FunctionComponent<SelectComponentProps> = props => {
    const { options = [] } = props;

    return (
        <AntDesignSelect className={s.select}>
            {options.map(option => (
                <Option
                    key={option?.value}
                    value={option?.value as React.ReactText}
                >
                    {option?.label}
                </Option>
            ))}
        </AntDesignSelect>
    );
};
