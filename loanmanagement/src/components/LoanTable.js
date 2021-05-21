import React from "react";
import { Table, Tag, Space } from "antd";
import { Divider } from "antd";

const LoanTable = (props) => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Contact",
      dataIndex: "contact",
      key: "contact",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Loan Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Start date",
      dataIndex: "sdate",
      key: "sdate",
    },
    {
      title: "End date",
      dataIndex: "edate",
      key: "edate",
    },
    {
      title: "Installments",
      dataIndex: "installments",
      key: "installments",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
  ];
  let x = localStorage.getItem("loanArray");
  if (x) {
    x = JSON.parse(x);
  } else x = props.data;
  return (
    <div>
      <Table dataSource={x} columns={columns} scroll={{ x: 400 }} />
    </div>
  );
};

export default LoanTable;
