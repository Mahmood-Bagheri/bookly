import { RegisterMutationVariables } from 'hooks/operations';

export type RegisterFormProps<T> = {
    onSubmit?: (values: T) => void;
    loading?: boolean;
};

export type RegisterFormComponentProps = RegisterFormProps<
    RegisterMutationVariables
>;
