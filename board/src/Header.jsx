import React, { Component } from "react";
import { Navbar, Button, Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import axios from "axios";
import $ from "jquery";
import {} from "jquery.cookie";
axios.defaults.withCredentials = true;
const headers = { withCredentials: true };

class Header extends Component {
  state = {
    buttonDisplay: "none",
    buttonLogin: "block"
  };

  componentDidMount() {
    if ($.cookie("login_id")) {
      this.setState({
        buttonDisplay: "block",
        buttonLogin:"none"
      });
    } else {
      this.setState({
        buttonDisplay: "none"
      });
    }
  }

  logout = () => {
    axios
      .get("http://localhost:8080/member/logout", {
        headers
      })
      .then(returnData => {
        if (returnData.data.message) {
          $.removeCookie("login_id");
          alert("로그아웃 되었습니다!");
          window.location.href = "/";
        }
      });
  };
  render() {
    const mainTextStyle={
      margin: "5px 5px 5px 20px",
    }

    const buttonStyle = {
      margin: "0px 5px 0px 10px",
      background: "white",
      border:"white",
      color: "black",
      display: this.state.buttonDisplay
    };

    const buttonLogin = {
      margin: "0px 5px 0px 10px",
      background: "white",
      border:"white",
      color: "black",
      display: this.state.buttonLogin
    }

    const imgStyle = {
      width:"100%",
      height: "30vh"
    }

    return (
      <div>
        <Navbar>
          <Navbar.Brand style={mainTextStyle} href="/">
            Error 404 - My Office
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <NavLink to="/boardWrite">
                <Button style={buttonStyle} variant="primary">
                Write
                </Button>
            </NavLink>
            <NavLink to="/login">
                <Button style={buttonLogin} variant="primary">
                Login
                </Button>
            </NavLink>
            <Button style={buttonStyle} onClick={this.logout} variant="primary">
            Logout
            </Button>
          </Navbar.Collapse>
        </Navbar>
        <Image style={imgStyle} src="./img/sea.jpg" fluid />
      </div>
    );
  }
}

export default Header;