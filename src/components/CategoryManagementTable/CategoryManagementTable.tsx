import React, {
    FC,
    useContext,
    useState,
    useEffect,
    useRef,
    ReactText,
} from "react";
/* components */
import { Table, Input, Popconfirm, Form } from "antd";
import { FormInstance } from "antd/lib/form";
/* modules */
/* helpers */
/* assets */
/* types */
import { CategoryManagementTableProps } from "./CategoryManagementTable.types";
/* styles */
import s from "./CategoryManagementTable.module.scss";
import { useDeleteCategory, useUpdateCategory } from "hooks";

const EditableContext = React.createContext<FormInstance<any> | null>(null);
interface Item extends Category.Query.Result {}

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

interface DataType extends Category.Query.Result {}

type ColumnTypes = Exclude<EditableTableProps["columns"], undefined>;

export const CategoryManagementTable: FC<CategoryManagementTableProps> = ({
    className,
    categories,
    ...restProps
}) => {
    const [updateCategory] = useUpdateCategory();
    const [deleteCategory] = useDeleteCategory();
    const basecolumns = [
        {
            title: "عنوان",
            dataIndex: "title",
            editable: true,
            render: (_: any, record: Category.Query.Result) => (
                <div className="cursor-pointer">{record.title}</div>
            ),
        },
        {
            title: "تعداد کتاب های ثبت شده در این دسته بندی",
            dataIndex: "title",
            editable: false,
            render: (_: any, record: Category.Query.Result) => (
                <div>{record?.books?.length || 0}</div>
            ),
        },
        {
            title: "عملیات",
            dataIndex: "operation",
            render: (_: any, record: Category.Query.Result) =>
                categories?.length >= 1 ? (
                    <Popconfirm
                        title="برای حذف این دسته بندی مطمئن هستید ؟ کلیه کتاب های این دسته بندی حذف خواهند شد!"
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
        deleteCategory(id);
    };

    const handleSave = (row: DataType) => {
        updateCategory({ categoryId: row._id, categoryTitle: row.title });
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
            dataSource={categories}
            components={components}
            rowClassName={() => "editable-row"}
            columns={columns as ColumnTypes}
            pagination={{ hideOnSinglePage: true }}
            bordered
            {...restProps}
        />
    );
};
