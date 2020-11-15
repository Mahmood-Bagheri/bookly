export type ColValuesUnionType =
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12;

export type ColProps = {
    xl?: ColValuesUnionType;
    lg?: ColValuesUnionType;
    md?: ColValuesUnionType;
    sm?: ColValuesUnionType;
    col?: ColValuesUnionType;
    className?: string;
};

export type ColComponentProps = ColProps;
