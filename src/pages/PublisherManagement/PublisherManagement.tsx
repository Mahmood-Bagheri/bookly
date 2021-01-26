import React, { FC, Fragment } from 'react';
/* components */
import { DocumentTitle } from 'components/DocumentTitle';
import { CreatePublisherForm } from 'components/CreatePublisherForm';
import { PublisherManagementTable } from 'components/PublisherManagementTable';
/* modules */
import {
    usePublishers,
    useCreatePublisher,
    CreatePublisherMutationVariables,
} from 'hooks';
/* types */
import { FormInstance } from 'antd/lib/form';

const PublisherManagement: FC = () => {
    const {
        data: publishers,
        isLoading: fetchPublisherIsLoading,
    } = usePublishers();
    const [
        createPublisher,
        { isLoading: createPublisherIsLoading },
    ] = useCreatePublisher();

    const handleCreate = (
        data: CreatePublisherMutationVariables,
        form: FormInstance
    ) => {
        createPublisher(data, {
            onSuccess: () => {
                form.resetFields();
            },
        });
    };

    return (
        <Fragment>
            <DocumentTitle title='مدیریت ناشر ها' />
            <CreatePublisherForm
                loading={createPublisherIsLoading}
                onSubmit={handleCreate}
            />
            <PublisherManagementTable
                loading={fetchPublisherIsLoading || createPublisherIsLoading}
                publishers={publishers!}
            />
        </Fragment>
    );
};

export default PublisherManagement;
