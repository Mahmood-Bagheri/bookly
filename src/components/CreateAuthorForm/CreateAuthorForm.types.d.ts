import { HTMLProps } from 'react';
import { CreateAuthorMutationVariables } from 'hooks';
import { FormInstance } from 'antd/lib/form';

export type CreateAuthorFormTypes = {
    onSubmit: (
        values: CreateAuthorMutationVariables,
        form: FormInstance
    ) => void;
    loading: boolean;
};

export type CreateAuthorFormProps = CreateAuthorFormTypes;
