import axios from "axios";
import React, { Component } from "react";
import MyContext from "../contexts/MyContext";
import ProductDetail from "./ProductDetailComponent";

class Product extends Component {
  static contextType = MyContext; // using this.context to access global state
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      noPages: 0,
      curPage: 1,
      itemSelected: null,
    };
  }
  render() {
    const prods = this.state.products.map((item, index) => {
      return (
        <div
          key={item._id}
          className={` ${index % 2 === 0 ? "bg-yellow-200" : "bg-white"
            }  grid grid-cols-6 w-full text-center gap-x-2 hover:cursor-pointer hover:bg-blue-300`}
          onClick={() => this.trItemClick(item)}
        >
          <div className="line-clamp-1">{item._id}</div>
          <div>{item.name}</div>
          <div>{item.price}</div>
          <div>{new Date(item.cdate).toLocaleString()}</div>
          <div>{item.category.name}</div>
          <div className="w-full flex justify-center items-center">
            <img
              src={"data:image/jpg;base64," + item.image}
              width="100px"
              height="100px"
              alt=""
            />
          </div>
        </div>
      );
    });
    const pagination = Array.from(
      { length: this.state.noPages },
      (_, index) => {
        if (index + 1 === this.state.curPage) {
          return (
            <span className="text-lg" key={index}>
              | <b>{index + 1}</b> |
            </span>
          );
        } else {
          return (
            <span
              key={index}
              className="link text-lg"
              onClick={() => this.lnkPageClick(index + 1)}
            >
              | {index + 1} |
            </span>
          );
        }
      }
    );
    return (
      <div className="flex sm:flex-row flex-col w-full ">
        <div className="sm:w-3/4 w-full">
          <h2 className="text-center font-bold mt-5 text-3xl mb-3">
            Product List
          </h2>
          <div className="w-full flex flex-row sm:justify-end sm:items-end justify-center items-center mb-3">
            <div className="mr-4 ">
              <input
                type="text"
                value={this.state.name}
                className="border border-black py-2 px-1 mr-2"
                placeholder="Input your category name"
                onChange={(e) => this.setState({ name: e.target.value })}
              />
              <button
                className="bg-green-500 rounded-lg hover:bg-green-800 py-2 px-3 text-white font-bold"
                onClick={() => this.handleSearch(this.state.name)}
              >
                Search
              </button>
            </div>
          </div>
          <div className="grid grid-cols-6 w-full text-center gap-x-2 font-bold bg-yellow-400 ">
            <div>ID</div>
            <div>Name</div>
            <div>Price</div>
            <div>Creation date</div>
            <div>Category</div>
            <div>Image</div>
          </div>
          {prods}
          <div className="w-full flex justify-center items-center">
            <td colSpan="6">{pagination}</td>
          </div>
        </div>
        <div className="sm:w-1/4 w-full">
          <ProductDetail
            item={this.state.itemSelected}
            curPage={this.state.curPage}
            updateProducts={this.updateProducts}
          />
        </div>
      </div>
    );
  }
  handleSearch(name) {
    const config = { headers: { "x-access-token": this.context.token } };
    if (name === "") {
      this.apiGetProducts();
      return;
    }
    axios.get(`/api/admin/find-products/${name}`, config).then((res) => {
      const result = res.data;
      console.log(result);
      this.setState({
        products: result.products,
        noPages: result.noPages,
        curPage: result.curPage,
      });
    });
  }
  updateProducts = (products, noPages, curPage) => {
    // arrow-function
    this.setState({ products: products, noPages: noPages, curPage: curPage });
  };
  componentDidMount() {
    this.apiGetProducts(this.state.curPage);
  }
  // event-handlers
  lnkPageClick(index) {
    this.apiGetProducts(index);
  }
  trItemClick(item) {
    this.setState({ itemSelected: item });
  }
  // apis
  apiGetProducts(page) {
    const config = { headers: { "x-access-token": this.context.token } };
    axios.get("/api/admin/products?page=" + page, config).then((res) => {
      const result = res.data;
      this.setState({
        products: result.products,
        noPages: result.noPages,
        curPage: result.curPage,
      });
    });
  }
}
export default Product;
