import React, { useRef, useState } from "react";
import "./App.css";
import "antd/dist/antd.css";
import "react-notifications/lib/notifications.css";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { IconButton } from "@material-ui/core";
import AboutUs from "./components/aboutus";
import Loans from "./components/Loans";
import Reviews from "./components/Reviews";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { Divider } from "antd";
import { Button, Radio } from "antd";
import Signin from "./components/Signin";
import LoanApplication from "./components/LoanApplication";
import LoanTable from "./components/LoanTable";
import { setLoanDetails } from "./redux/actions";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return state;
};
function App(props) {
  //localStorage.setItem("loanArray", []);
  const aboutUs = useRef();
  const loans = useRef();
  const home = useRef();
  const reviews = useRef();
  const [route, setRoute] = useState("localPage");
  const [data, setData] = useState([]);
  function goToAboutUs() {
    aboutUs.current.scrollIntoView({ behavior: "smooth" });
  }
  function goToHome() {
    home.current.scrollIntoView({ behavior: "smooth" });
  }
  function goToLoans() {
    loans.current.scrollIntoView({ behavior: "smooth" });
  }
  function goToReviews() {
    reviews.current.scrollIntoView({ behavior: "smooth" });
  }

  const buttonRight = document.getElementsByClassName("slideRight");
  const buttonLeft = document.getElementsByClassName("slideLeft");

  buttonRight.onclick = function () {
    document.getElementById("container").scrollLeft += 20;
  };
  buttonLeft.onclick = function () {
    document.getElementById("container").scrollLeft -= 20;
  };
  const routeChanger = (route) => {
    setRoute(route);
  };
  const logout = () => {
    localStorage.setItem("route", "localPage");
    localStorage.setItem("loanArray", []);
    setRoute("locakjjglPage");
  };
  const loanArrayFunction = (data1) => {
    localStorage.setItem("loanArray", JSON.stringify(data1));
    setData(data1.map((d) => d));
  };
  return (
    <div>
      {route && localStorage.getItem("route") === "signin" ? (
        <Signin
          routeChanger={routeChanger}
          loanArrayFunction={loanArrayFunction}
        />
      ) : localStorage.getItem("application") === "true" ? (
        <LoanApplication
          routeChanger={routeChanger}
          loanArrayFunction={loanArrayFunction}
        />
      ) : (
        <div>
          <div ref={home} />
          <div className='box'>
            <img src='loan.jpg' className='mainImage' alt='imjhyfvjhage' />
          </div>
          <div
            class='container'
            style={{ position: "relative", marginTop: "-550px" }}
          >
            <nav class='header'>
              <div>
                {localStorage.getItem("route") === "authenticated" ? (
                  <Button
                    type='primary'
                    shape='round'
                    size='large'
                    style={{
                      zIndex: "1000",
                      position: "absolute",
                      color: "white ",
                      backgroundColor: "#1890ff",
                    }}
                    onClick={() => {
                      localStorage.setItem("application", true);
                      setRoute("loanApplication");
                    }}
                  >
                    Apply for Loan
                  </Button>
                ) : (
                  <Button
                    type='primary'
                    shape='round'
                    size='large'
                    style={{
                      zIndex: "1000",
                      position: "absolute",
                      color: "white ",
                      backgroundColor: "#1890ff",
                    }}
                    onClick={() => {
                      localStorage.setItem("route", "signin");
                      setRoute("signin");
                    }}
                  >
                    Sign in
                  </Button>
                )}
              </div>
              <input type='checkbox' id='nav-toggler' />
              <label for='nav-toggler' className='nav-toggler-label'>
                <span style={{ backgroundColor: "#FFFFFF" }}></span>
                <span style={{ backgroundColor: "#FFFFFF" }}></span>
                <span style={{ backgroundColor: "#FFFFFF" }}></span>
              </label>
              <ul class='nav-list' style={{ cursor: "pointer" }}>
                <li class='nav-list-item' onClick={goToHome}>
                  <h2 class='nav-link'>Home</h2>
                </li>
                <li class='nav-list-item' onClick={goToAboutUs}>
                  <h2 class='nav-link'>About us</h2>
                </li>
                <li class='nav-list-item' onClick={goToLoans}>
                  <h2 class='nav-link'>Loans</h2>
                </li>
                <li class='nav-list-item' onClick={goToReviews}>
                  <h2 class='nav-link'>Reviews</h2>
                </li>
                <li class='nav-list-item' onClick={logout}>
                  {localStorage.getItem("route") === "authenticated" ? (
                    <h2 class='nav-link'>Logout</h2>
                  ) : null}
                </li>
              </ul>
            </nav>
          </div>

          <IconButton
            onClick={goToHome}
            style={{
              position: "fixed",
              bottom: "10px",
              left: "50%",
              zIndex: "100",
            }}
          >
            <KeyboardArrowUpIcon
              style={{
                color: "#2f3238",
                fontSize: "50px",
                backgroundColor: "white",
                borderRadius: "50%",
              }}
            />
          </IconButton>
          <div
            style={{ margin: "auto", marginTop: "600px" }}
            className='RestContent'
          >
            <div style={{ marginBottom: "100px" }} className='scrollX'>
              {localStorage.getItem("route") === "authenticated" ? (
                <LoanTable data={data} />
              ) : null}
            </div>
            <Divider
              style={{
                color: "white",
                backgroundColor: "white",
                marginBottom: "100px",
              }}
            />
            <div ref={aboutUs}>
              <AboutUs />
            </div>
            <Divider
              style={{
                color: "white",
                backgroundColor: "white",
                marginTop: "100px",
              }}
            />
            <div
              ref={loans}
              style={{
                marginTop: "100px",
                display: "flex",
                flexDirection: "row",
              }}
              className='container'
            >
              <ChevronLeftIcon
                style={{
                  color: "white",
                  fontSize: "60px",
                  position: "relative",
                  top: "100px",
                }}
                className='slideLeft'
              />
              <Loans />
              <ChevronRightIcon
                style={{
                  color: "white",
                  fontSize: "60px",
                  position: "relative",
                  top: "100px",
                }}
                className='slideRight'
              />
            </div>
            <Divider
              style={{
                color: "white",
                backgroundColor: "white",
                marginTop: "100px",
              }}
            />
            <div ref={reviews} style={{ marginTop: "100px" }}>
              <Reviews />
            </div>
            <Divider
              style={{
                color: "white",
                backgroundColor: "white",
                marginTop: "1px",
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default connect(mapStateToProps, null)(App);
