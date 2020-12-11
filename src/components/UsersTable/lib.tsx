import React from "react";
import { Input } from "components/Input";
import { Button } from "components/Button";
import { SearchOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";
import { Space } from "antd";

export const getColumnSearchProps = (
    dataIndex: string,
    handleReset: Function,
    handleSearch: Function,
    inputRef: any,
    searchedColumn: string,
    searchText: string
) => ({
    filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
    }: any) => (
        <div style={{ padding: 8 }}>
            <Input.Text
                ref={inputRef}
                value={selectedKeys[0]}
                onChange={e =>
                    setSelectedKeys(e.target.value ? [e.target.value] : [])
                }
                onPressEnter={() =>
                    handleSearch(selectedKeys, confirm, dataIndex)
                }
                style={{ width: 188, marginBottom: 8, display: "block" }}
            />
            <Space>
                <Button
                    type="primary"
                    onClick={() =>
                        handleSearch(selectedKeys, confirm, dataIndex)
                    }
                    // icon={<SearchOutlined />}
                    size="small"
                    style={{ width: 90 }}
                >
                    جست و جو
                </Button>
                <Button
                    onClick={() => handleReset(clearFilters)}
                    size="small"
                    style={{ width: 90 }}
                >
                    بازنشانی
                </Button>
            </Space>
        </div>
    ),
    filterIcon: (filtered: boolean) => (
        <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value: string, record: any) =>
        record[dataIndex]
            ? record[dataIndex]
                  .toString()
                  .toLowerCase()
                  .includes(value.toLowerCase())
            : "",
    onFilterDropdownVisibleChange: (visible: boolean) => {
        if (visible) {
            setTimeout(() => inputRef.current.select(), 100);
        }
    },
    render: (text: string) =>
        searchedColumn === dataIndex ? (
            <Highlighter
                highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
                searchWords={[searchText]}
                autoEscape
                textToHighlight={text ? text.toString() : ""}
            />
        ) : (
            text
        ),
});
