import React, { FC, useContext, useState, useEffect, useRef } from 'react';
import { useDeletePublisher, useUpdatePublisher } from 'hooks';
/* components */
import { Form, Input } from 'antd';
import { PopConfirm } from 'components/PopConfirm';
import { Table } from 'components/Table';
/* modules */
import clsx from 'classnames';
/* helpers */
/* assets */
/* types */
import { FormInstance } from 'antd/lib/form';
import { PublisherManagementTableProps } from './PublisherManagementTable.types';
import { Publisher } from 'types/publisher';
/* styles */
import s from './PublisherManagementTable.module.scss';

const EditableContext = React.createContext<FormInstance<any> | null>(null);
interface Item extends Publisher.Query.Result {}

interface EditableRowProps {
    index: number;
}
const EditableRow: React.FC<EditableRowProps> = ({ index, ...props }) => {
    const [form] = Form.useForm();
    return (
        <Form form={form} component={false}>
            <EditableContext.Provider value={form}>
                <tr {...props} />
            </EditableContext.Provider>
        </Form>
    );
};

interface EditableCellProps {
    title: React.ReactNode;
    editable: boolean;
    children: React.ReactNode;
    dataIndex: keyof Item;
    record: Item;
    handleSave: (record: Item) => void;
}

const EditableCell: React.FC<EditableCellProps> = ({
    title,
    editable,
    children,
    dataIndex,
    record,
    handleSave,
    ...restProps
}) => {
    const [editing, setEditing] = useState(false);
    const inputRef = useRef<Input>(null);
    const form = useContext(EditableContext)!;

    useEffect(() => {
        if (editing) {
            inputRef.current!.focus();
        }
    }, [editing]);

    const toggleEdit = () => {
        setEditing(!editing);
        form.setFieldsValue({ [dataIndex]: record[dataIndex] });
    };

    const save = async () => {
        try {
            const values = await form.validateFields();

            toggleEdit();
            handleSave({ ...record, ...values });
        } catch (errInfo) {
            console.log('Save failed:', errInfo);
        }
    };

    let childNode = children;

    if (editable) {
        childNode = editing ? (
            <Form.Item
                style={{ margin: 0 }}
                name={dataIndex}
                rules={[
                    {
                        required: true,
                        message: `ورود ${title} الزامی است`,
                    },
                ]}
            >
                <Input ref={inputRef} onPressEnter={save} onBlur={save} />
            </Form.Item>
        ) : (
            <div onClick={toggleEdit}>{children}</div>
        );
    }

    return <td {...restProps}>{childNode}</td>;
};
type EditableTableProps = Parameters<typeof Table>[0];

interface DataType extends Publisher.Query.Result {}

type ColumnTypes = Exclude<EditableTableProps['columns'], undefined>;

export const PublisherManagementTable: FC<PublisherManagementTableProps> = ({
    className,
    publishers,
    ...restProps
}) => {
    const [updatePublisher] = useUpdatePublisher();
    const [deletePublisher] = useDeletePublisher();
    const basecolumns = [
        {
            title: 'عنوان',
            dataIndex: 'title',
            editable: true,
            render: (_: any, record: Publisher.Query.Result) => (
                <div className='cursor-pointer'>{record.title}</div>
            ),
        },
        {
            title: 'توضیحات',
            dataIndex: 'description',
            editable: true,
        },
        {
            title: 'عملیات',
            dataIndex: 'operation',
            render: (_: any, record: Publisher.Query.Result) =>
                publishers?.length >= 1 ? (
                    <PopConfirm
                        title='برای حذف این ناشر مطمئن هستید ؟ کلیه کتاب های مربوط به این ناشر حذف خواهند!'
                        onConfirm={() => handleDelete(record._id)}
                        okText='بله'
                        cancelText='خیر'
                    >
                        <a>حذف</a>
                    </PopConfirm>
                ) : null,
        },
    ];
    const handleDelete = (id: string) => {
        deletePublisher(id);
    };

    const handleSave = (row: DataType) => {
        updatePublisher({
            publisherId: row._id,
            title: row.title,
            description: row.description,
        });
    };

    const components = {
        body: {
            row: EditableRow,
            cell: EditableCell,
        },
    };

    const columns = basecolumns.map(col => {
        if (!col.editable) {
            return col;
        }
        return {
            ...col,
            onCell: (record: DataType) => ({
                record,
                editable: col.editable,
                dataIndex: col.dataIndex,
                title: col.title,
                handleSave: handleSave,
            }),
        };
    });

    return (
        <Table
            dataSource={publishers}
            components={components}
            rowClassName={() => 'editable-row'}
            columns={columns as ColumnTypes}
            pagination={{ hideOnSinglePage: true }}
            bordered
            {...restProps}
        />
    );
};
