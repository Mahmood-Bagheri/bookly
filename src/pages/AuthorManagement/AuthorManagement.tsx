import React, { FC, Fragment } from "react";
/* components */
import { DocumentTitle } from "components/DocumentTitle";
import { CreateAuthorForm } from "components/CreateAuthorForm";
import { AuthorManagementTable } from "components/AuthorManagementTable";
/* modules */
import {
    CreateAuthorMutationVariables,
    useAuthors,
    useCreateAuthor,
} from "hooks";
import { FormInstance } from "antd/lib/form";

const AuthorManagement: FC = () => {
    const { data: authors, isLoading: loading } = useAuthors();
    const [
        createCategory,
        { isLoading: createCategoryIsLoading },
    ] = useCreateAuthor();

    const handleCreate = (
        data: CreateAuthorMutationVariables,
        form: FormInstance
    ) => {
        createCategory(data, {
            onSuccess: () => {
                form.resetFields();
            },
        });
    };

    return (
        <Fragment>
            <DocumentTitle title="مدیریت نویسندگان" />
            <CreateAuthorForm
                loading={createCategoryIsLoading}
                onSubmit={handleCreate}
            />
            <AuthorManagementTable loading={loading} authors={authors!} />
        </Fragment>
    );
};

export default AuthorManagement;
