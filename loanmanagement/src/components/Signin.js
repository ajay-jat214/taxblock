import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import IconButton from "@material-ui/core/IconButton";
import { connect } from "react-redux";
import { CHANGE_ROUTE } from "../redux/constants";
import { setRoute } from "../redux/actions";
import { setEmailCredentials } from "../redux/actions";
import "../App.css";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import { Input } from "antd";

const useStyles = makeStyles({
  textFieldColor: {
    color: "white",
  },
});

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    search: (data) => dispatch(setRoute(data)),
    search2: (data) => dispatch(setEmailCredentials(data)),
  };
};

function Signin(props) {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createNotification = (data) => {
    if (data.message === "success") {
      localStorage.setItem("route", "authenticated");
    }
    if (data.message === "servererror") {
      return NotificationManager.warning(
        "Warning message",
        data.notification,
        3000
      );
    }
    if (data.message === "success") {
      return NotificationManager.error(
        "Error message",
        data.notification,
        5000,
        () => {
          alert("callback");
        }
      );
    }
    if (data.message === "invalid") {
      return NotificationManager.error(
        "Error message",
        data.notification,
        5000,
        () => {
          alert("callback");
        }
      );
    }
  };

  const onButtonSubmit = () => {
    props.search2(email);
    fetch("http://localhost:3001/signin", {
      method: "post",
      headers: { Authentication: "Content-Type:application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === "success") {
          createNotification(data);
          props.search("authenticated");
          props.routeChanger("alksdjflk");
        } else {
          alert(data.notification);
          //createNotification(data);
        }
      })
      .catch((err) => {
        createNotification(err);
      });

    fetch("http://localhost:3001/fetchLoans", {
      method: "post",
      headers: { Authentication: "Content-Type:application/json" },
      body: JSON.stringify({
        email: email,
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
  return (
    <div>
      <NotificationContainer />
      <div className='box' style={{ opacity: "0.2" }}>
        <img src='loan.jpg' className='mainImage' alt='imilkjefioage' />
      </div>

      <IconButton>
        <ArrowBackIosIcon
          onClick={() => {
            localStorage.setItem("route", "localPage");
            props.routeChanger("localPage.");
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
      <main
        className='white pa4 black-80 '
        style={{ position: "relative", top: "-450px" }}
      >
        <div className='measure center tc parent'>
          <h1 style={{ color: "white" }}>Sign In!</h1>
          <Input
            placeholder='Enter Email'
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <div style={{ marginTop: "50px" }} />
          <Input.Password
            placeholder='input password'
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <div style={{ marginTop: "50px" }} />
          <div className='white'>
            <Button
              style={{ color: "white" }}
              onClick={() => {
                onButtonSubmit();
              }}
            >
              Social Sign In
            </Button>
          </div>
        </div>
      </main>
      <div style={{ zIndex: "100" }}></div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
