import { HTMLProps } from "react";
import { Profile } from "types/profile";

export type ProfileFormTypes<T> = {
    onSubmit: (values: T) => void;
    loading?: boolean;
};

export type ProfileFormProps = ProfileFormTypes<
    Profile.Mutation.Update.Variables
>;
