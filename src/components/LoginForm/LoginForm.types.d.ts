import { LoginMutationVariables } from 'hooks';

export type LoginFormProps<T> = {
    onSubmit: (values: T) => void;
    loading?: boolean;
};

export type LoginFormComponentProps = LoginFormProps<LoginMutationVariables>;
