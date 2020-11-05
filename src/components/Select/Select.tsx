import React, { FunctionComponent } from "react";
import { StyledSelect } from "./styles";
import { SelectComponentProps } from "./Select.types";
const { Option } = StyledSelect;

export const Select: FunctionComponent<SelectComponentProps> = props => {
    const { options = [] } = props;

    return (
        <StyledSelect>
            {options.map(option => (
                <Option
                    key={option?.value}
                    value={option?.value as React.ReactText}
                >
                    {option?.label}
                </Option>
            ))}
        </StyledSelect>
    );
};
