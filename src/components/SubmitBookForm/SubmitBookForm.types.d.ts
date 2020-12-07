import { HTMLProps } from "react";

export type SubmitBookFormTypes = {
    loading?: boolean;
};

export type SubmitBookFormProps = HTMLProps<HTMLDivElement> &
    SubmitBookFormTypes;
