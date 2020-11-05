import styled from "styled-components";
import { Select as AntDesignSelect } from "antd";

export const StyledSelect = styled(AntDesignSelect)`
    width: 100%;

    .ant-select-selector {
        width: 100%;
        border-radius: 9999px !important;
        background: #f9f9f9 !important;
    }

    .ant-select-arrow {
        color: #000;
    }
`;
