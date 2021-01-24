import { CreateCategoryMutationVariables } from "hooks/operations/category/useCreateCategory";
import { FormInstance } from "antd/lib/form";
import { HTMLProps } from "react";

export type CreateCategoryFormTypes = {
    onSubmit: (
        values: CreateCategoryMutationVariables,
        form: FormInstance
    ) => void;
    loading: boolean;
};

export type CreateCategoryFormProps = CreateCategoryFormTypes;
