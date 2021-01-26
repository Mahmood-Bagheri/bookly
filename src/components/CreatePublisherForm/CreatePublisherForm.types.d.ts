import { FormInstance } from 'antd/lib/form';
import { CreatePublisherMutationVariables } from 'hooks';
import { HTMLProps } from 'react';

export type CreatePublisherFormTypes = {
    onSubmit: (
        values: CreatePublisherMutationVariables,
        form: FormInstance
    ) => void;
    loading?: boolean;
};

export type CreatePublisherFormProps = CreatePublisherFormTypes;
