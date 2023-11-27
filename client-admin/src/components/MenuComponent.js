import React, { Component } from "react";
import MyContext from "../contexts/MyContext";
import { Link } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import SidebarComponent from "./SidebarComponent";

class Menu extends Component {
  static contextType = MyContext; // using this.context to access global state
  constructor(props) {
    super(props);
    this.state = {
      url: "/home",
    };
  }
  render() {
    return (
      <>
        <SidebarComponent isMobile={false} username={this.context.username} />
      </>
    );
  }
  // event-handlers
  lnkLogoutClick() {
    this.context.setToken("");
    this.context.setUsername("");
  }
}
export default Menu;
