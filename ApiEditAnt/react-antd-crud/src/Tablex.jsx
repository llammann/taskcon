import React from "react";
import { Input, Table } from "antd";
import { Button, Modal } from "antd";
import Swal from "sweetalert2";
import axios from "axios";
import { useState } from "react";
const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};
function Tablex({ data, setData }) {
  const [updatedData, setupdatedData] = useState({
    contactName: "",
    companyName: "",
    contactName: "",
  });
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };
  const columns = [
    { title: "ID", dataIndex: "id", sorter: (a, b) => a.id - b.id },
    {
      title: "contactTitle",
      dataIndex: "contactTitle",
      sorter: (a, b) => a.companyName.localeCompare(b.companyName),
    },
    {
      title: "companyName",
      dataIndex: "companyName",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    },
    { title: "contactName", dataIndex: "contactName" },
    { title: "address/country", dataIndex: ["address", "country"] },
    {
      title: "Delete",
      render: (text, record) => (
        <Button
          type="primary"
          danger
          onClick={(e) => {
            Swal.fire("Succesfully deleted!");
            setData(data.filter((x) => x.id !== record.id));
            axios.delete(
              "https://northwind.vercel.app/api/suppliers/" + record.id
            );
          }}
        >
          {" "}
          Delete{" "}
        </Button>
      ),
    },
    {
      title: "Edit",
      render: (text, record) => (
        <>
          {" "}
          <Button
            type="primary"
            onClick={(e) => {
              showModal;
              setupdatedData({
                contactName: record.contactName,
                companyName: record.companyName,
                contactName: record.contactName,
              });
            }}
          >
            {" "}
            Edit{" "}
          </Button>{" "}
          <Modal
            title="Title"
            open={open}
            onOk={handleOk}
            confirmLoading={confirmLoading}
            onCancel={handleCancel}
          >
            {" "}
            <p>{modalText}</p>
          </Modal>{" "}
        </>
      ),
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
export default Tablex;
