import { Table } from "antd";
import React from "react";
import "./LeftPanel.Style.css"

const dataSource = [];

const columns = [
  {
    title: "PRODUCT",
    dataIndex: "product",
    key: "product",
    style: { background: 'transparent' } 
  },
  {
    title: "QUANTITY",
    dataIndex: "quantity",
    key: "quantity",
  },
  {
    title: "UNIT PRICE",
    dataIndex: "unitPrice",
    key: "unitPrice",
  },
  {
    title: "LINE PRICE",
    dataIndex: "linePrice",
    key: "linePrice",
  },
];

const ProductTable = () => {
  return (
    <Table
      pagination={false}
      dataSource={dataSource}
      columns={columns}
      locale={{
        emptyText: <div>Please Select Product Item</div>,
      }}
    />
  );
};

export default ProductTable;
