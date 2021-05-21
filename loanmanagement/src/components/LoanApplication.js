import React from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import IconButton from "@material-ui/core/IconButton";
import "../App.css";
import { makeStyles } from "@material-ui/core/styles";
import { Form, Input, Button, Checkbox, Radio } from "antd";
import { DatePicker, Space } from "antd";
import { connect } from "react-redux";
import { setLoanDetails } from "../redux/actions";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    search: (data) => dispatch(setLoanDetails(data)),
  };
};

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 8,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
      border: "white",
      backgroundColor: "white",
    },
  },
}));

const LoanApplication = (props) => {
  const classes = useStyles();

  const createNotification = (data) => {
    switch (data.message) {
      case "success":
        localStorage.setItem("application", "true");
        props.routeChanger("authenticated");

        break;
      case "servererror":
        break;
      default:
        break;
    }
  };

  function onChange(date, dateString) {}
  const onFinish = (values) => {
    props.search(values);
    fetch("http://localhost:3001/loanApplication", {
      method: "post",
      headers: { Authentication: "Content-Type:application/json" },
      body: JSON.stringify({
        values: values,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        createNotification(data);
        localStorage.setItem("application", "false");
        props.routeChanger("authenticated");
      })
      .catch((err) => {
        console.log(err);
      });

    fetch("http://localhost:3001/fetchLoans", {
      method: "post",
      headers: { Authentication: "Content-Type:application/json" },
      body: JSON.stringify({
        email: props.emailDetails.email,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("loanArray", JSON.stringify(data));
        let x = localStorage.getItem("loanArray");
        if (x) {
          x = JSON.parse(x);
        } else x = props.data;
        props.loanArrayFunction(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div style={{ color: "white" }}>
      <NotificationContainer />
      <div className='box' style={{ opacity: "0.2" }}>
        <img
          src='loan.jpg'
          className='mainImage'
          alt='ilksjdflksjflkslifmage'
        />
      </div>
      <IconButton>
        <ArrowBackIosIcon
          onClick={() => {
            localStorage.setItem("application", "false");
            props.routeChanger("localPage");
          }}
          style={{
            color: "white",
            fontSize: "40px",
            position: "relative",
            top: "-520px",
            marginLeft: "20px",
          }}
        />
      </IconButton>
      <div
        style={{
          position: "relative",
          top: "-500px",
          marginRight: "auto",
          paddingRight: "auto",
        }}
      >
        <h1
          style={{
            color: "white",
            textAlign: "center",
            marginBottom: "50px",
          }}
        >
          Apply for Loan!
        </h1>
        <Form
          {...layout}
          name='basic'
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label='Name'
            name='name'
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
            style={{ color: "white" }}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label='Address'
            name='address'
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
            style={{ color: "white" }}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label='Contact'
            name='contact'
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
            style={{ color: "white" }}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label='Email'
            name='email'
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
            style={{ color: "white" }}
          >
            <Input defaultValue={props.emailDetails.email} />
          </Form.Item>
          <Form.Item
            label='Loan Amount'
            name='amount'
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
            style={{ color: "white" }}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label='Loan start date'
            name='sdate'
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <DatePicker onChange={onChange} />
          </Form.Item>
          <Form.Item
            label='Loan end date'
            name='edate'
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <DatePicker onChange={onChange} />
          </Form.Item>
          <Form.Item
            label='Monthly Installments'
            name='installments'
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
            style={{ color: "white" }}
          >
            <Input />
          </Form.Item>
          <Form.Item {...tailLayout} name='remember' valuePropName='checked'>
            <Form.Item
              name='Type'
              label='Type'
              rules={[
                {
                  required: true,
                  message: "Please pick an item!",
                },
              ]}
              style={{ color: "white" }}
            >
              <Radio.Group>
                <Radio value='fixed'>Fixed</Radio>
                <Radio value='floating'>Floating</Radio>
              </Radio.Group>
            </Form.Item>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type='primary' htmlType='submit'>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(LoanApplication);
