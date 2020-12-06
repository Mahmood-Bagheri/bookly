import { HTMLProps } from "react";

export type ProfileFormTypes = {
    onSubmit: (values: object) => void;
    loading?: boolean;
};

export type ProfileFormProps = HTMLProps<HTMLDivElement> & ProfileFormTypes;
