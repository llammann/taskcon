import React from "react";
import { Table } from "antd";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    sorter: (a, b) => a.id - b.id,
  },
  {
    title: "Companyname",
    dataIndex: "companyName",
    sorter: (a, b) => a.companyName.localeCompare(b.companyName),
  },
  {
    title: "City",
    dataIndex: ["address", "city"],
    filters: [
      // {
      //   text: data.address.city,
      //   value: data.address.city,
      // },
    ],
    onFilter: (value, record) => record.address.startsWith(value),
    filterSearch: true,
    width: "40%",
  },
];

// const datas = [
//   {
//     key: "1",
//     name: "John Brown",
//     age: 32,
//     address: "New York No. 1 Lake Park",
//   },
//   {
//     key: "2",
//     name: "Jim Green",
//     age: 42,
//     address: "London No. 1 Lake Park",
//   },
//   {
//     key: "3",
//     name: "Joe Black",
//     age: 32,
//     address: "Sydney No. 1 Lake Park",
//   },
//   {
//     key: "4",
//     name: "Jim Red",
//     age: 32,
//     address: "London No. 2 Lake Park",
//   },
// ];

const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};
function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios("https://northwind.vercel.app/api/suppliers").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <Table
      columns={columns}
      dataSource={data}
      onChange={onChange}
      rowKey={(record) => record.id}
    />
  );
}
export default App;
