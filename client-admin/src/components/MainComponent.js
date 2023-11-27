import React, { Component } from "react";
import MyContext from "../contexts/MyContext";
import Menu from "./MenuComponent";
import Home from "./HomeComponent";
import { Routes, Route, Navigate } from "react-router-dom";
import Category from "./CategoryComponent";
import Product from "./ProductComponent";
import Order from "./OrderComponent";
import Customer from "./CustomerComponent";
import MenuMobileComponent from "./MenuMobileComponent";

class Main extends Component {
  static contextType = MyContext; // using this.context to access global state
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
    };
  }

  componentDidMount() {
    window.addEventListener("resize", () => {
      this.setState({ width: window.innerWidth });
      console.log(this.state.width);
    });
  }

  render() {
    if (this.context.token !== "") {
      return (
        <div
          className={`flex w-full  ${
            this.state.width <= 500 ? "flex-col px-4" : "flex-row"
          }`}
        >
          {this.state.width > 500 ? (
            <Menu />
          ) : (
            <MenuMobileComponent username={this.context.username} />
          )}

          <Routes>
            <Route
              path="/admin"
              element={<Navigate replace to="/admin/home" />}
            />
            <Route path="/admin/home" element={<Home />} />
            <Route path="/admin/category" element={<Category />} />
            <Route path="/admin/product" element={<Product />} />
            <Route path="/admin/order" element={<Order />} />
            <Route path="/admin/customer" element={<Customer />} />
          </Routes>
        </div>
      );
    }
    return <div />;
  }
}
export default Main;
