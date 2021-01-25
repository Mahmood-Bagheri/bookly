import React, { FC, useContext, useState, useEffect, useRef } from "react";
/* components */
import { Table, Input, Popconfirm, Form } from "antd";
import { FormInstance } from "antd/lib/form";
/* modules */
import { useDeleteAuthor, useUpdateAuthor } from "hooks";
/* helpers */
/* assets */
/* types */
import { AuthorManagementTableProps } from "./AuthorManagementTable.types";
/* styles */
import s from "./AuthorManagementTable.module.scss";

const EditableContext = React.createContext<FormInstance<any> | null>(null);
interface Item extends Author.Query.Result {}

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
            console.log("Save failed:", errInfo);
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

interface DataType extends Author.Query.Result {}

type ColumnTypes = Exclude<EditableTableProps["columns"], undefined>;

export const AuthorManagementTable: FC<AuthorManagementTableProps> = ({
    className,
    authors,
    ...restProps
}) => {
    const [updateAuthor] = useUpdateAuthor();
    const [deleteAuthor] = useDeleteAuthor();
    const basecolumns = [
        {
            title: "نام",
            dataIndex: "name",
            editable: true,
            render: (_: any, record: Author.Query.Result) => (
                <div className="cursor-pointer">{record.name}</div>
            ),
        },
        {
            title: "تعداد کتاب های ثبت شده برای این نویسنده",
            dataIndex: "title",
            editable: false,
            render: (_: any, record: Author.Query.Result) => (
                <div>{record?.books?.length || 0}</div>
            ),
        },
        {
            title: "عملیات",
            dataIndex: "operation",
            render: (_: any, record: Author.Query.Result) =>
                authors?.length >= 1 ? (
                    <Popconfirm
                        title="با حذف خواننده کل کتاب های ایشان نیز حذف خواهند شد"
                        onConfirm={() => handleDelete(record._id)}
                        okText="بله"
                        cancelText="خیر"
                    >
                        <a>حذف</a>
                    </Popconfirm>
                ) : null,
        },
    ];
    const handleDelete = (id: string) => {
        deleteAuthor(id);
    };

    const handleSave = (row: DataType) => {
        updateAuthor({ authorId: row._id, name: row.name });
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
            dataSource={authors}
            components={components}
            rowClassName={() => "editable-row"}
            columns={columns as ColumnTypes}
            pagination={{ hideOnSinglePage: true }}
            bordered
            {...restProps}
        />
    );
};
