import React, { FunctionComponent } from "react";
/* components */
import { Table as AntDesignTable } from "antd";
/* modules */
import clsx from "classnames";
/* helpers */
/* assets */
import { ReactComponent as DataIcon } from "assets/icons/data.svg";
/* types */
import { TableComponentProps, TableProps } from "./Table.types";
/* styles */
import s from "./Table.module.scss";

export const Table: FunctionComponent<TableComponentProps> = props => {
    const { className, ...restProps } = props;

    const defaultTableProps: TableProps<any> = {
        locale: {
            emptyText: defaultEmptyText(),
        },
    };

    return (
        <AntDesignTable
            className={clsx(className)}
            {...defaultTableProps}
            {...restProps}
        />
    );
};

const defaultEmptyText = () => (
    <div className={s.emptyBox}>
        <DataIcon />
        <p>هیچ اطلاعاتی یافت نشد!</p>
    </div>
);
