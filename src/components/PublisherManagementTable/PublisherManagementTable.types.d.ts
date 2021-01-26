import { TableProps } from 'antd/lib/table';
import { HTMLProps } from 'react';
import { Publisher } from 'types/publisher';

export type PublisherManagementTableTypes = {
    publishers: Publisher.Query.Result[];
};

export type PublisherManagementTableProps = TableProps<Publisher.Query.Result> &
    PublisherManagementTableTypes;
