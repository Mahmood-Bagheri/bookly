import { HTMLProps } from "react";
import { Profile } from "types/profile";

export type ProfileFormTypes<T> = {
    onSubmit: (values: T) => void;
    loading?: boolean;
    initialProfile: Profile.Mutation.Update.Variables;
};

export type ProfileFormProps = ProfileFormTypes<
    Profile.Mutation.Update.Variables
>;
