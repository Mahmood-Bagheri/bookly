export type OptionType = {
    value: string | number;
    label: string;
};

export type SelectComponentProps = {
    options: Partial<OptionType[]>;
};
