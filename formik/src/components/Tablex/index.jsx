import React from "react";
import { Table } from "antd";

function Tablex({ data }) {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "ID",
      dataIndex: "id",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Description",
      dataIndex: "description",
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={data}
      onChange={onChange}
      rowKey={(record) => record.id}
    />
  );
}

const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};

export default Tablex;
