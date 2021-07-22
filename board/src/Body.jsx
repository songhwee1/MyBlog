import React, { Component } from "react";
import LoginForm from "./LoginForm";
import BoardForm from "./BoardForm";
import BoardWriteForm from "./BoardWriteForm";
import BoardDetail from "./BoardDetail";
import { Route } from "react-router-dom";
import $ from "jquery";
import {} from "jquery.cookie";

class Body extends Component {
  render() {
    let resultForm;
    function getResultForm() {
      // console.log($.cookie("login_id"));
      if ($.cookie("login_id")) {
        resultForm = <Route exact path="/" component={BoardForm}></Route>;
        return resultForm;
      } else {
        resultForm = <Route exact path="/" component={BoardForm}></Route>;
        return resultForm;
      }
    }
    getResultForm();
    return (
      <div>
        <Route path="/boardWrite" component={BoardWriteForm}></Route>
        <Route path="/board/detail" component={BoardDetail}></Route>
        <Route path="/login" component={LoginForm}></Route>
        {resultForm}
      </div>
    );
  }
}

export default Body;