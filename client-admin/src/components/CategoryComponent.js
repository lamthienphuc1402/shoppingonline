import axios from "axios";
import React, { Component } from "react";
import MyContext from "../contexts/MyContext";
import CategoryDetail from "./CategoryDetailComponent";

class Category extends Component {
  static contextType = MyContext; // using this.context to access global state
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      itemSelected: null,
      name: "",
    };
  }
  render() {
    const cates = this.state.categories.map((item, index) => {
      return (
        <div
          key={item._id}
          className={` ${
            index % 2 === 0 ? "bg-yellow-200" : "bg-white"
          }  grid grid-cols-2 w-full text-center gap-x-2 hover:cursor-pointer hover:bg-blue-300`}
          onClick={() => this.trItemClick(item)}
        >
          <div>{item._id}</div>
          <div>{item.name}</div>
        </div>
      );
    });
    return (
      <div className="flex sm:flex-row flex-col w-full">
        <div className="sm:w-2/3 w-full">
          <h2 className="text-center font-bold mt-5 text-3xl mb-3">
            Category List
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
          <div className="grid grid-cols-2 w-full text-center gap-x-2 font-bold bg-yellow-400 ">
            <div>ID</div>
            <div>Name</div>
          </div>
          {cates}
        </div>
        <div className="sm:w-1/3 w-full">
          <CategoryDetail
            item={this.state.itemSelected}
            updateCategories={this.updateCategories}
          />
        </div>
      </div>
    );
  }
  updateCategories = (categories) => {
    // arrow-function
    this.setState({ categories: categories });
  };
  componentDidMount() {
    this.apiGetCategories();
  }
  // event-handlers
  trItemClick(item) {
    this.setState({ itemSelected: item });
  }
  handleSearch(name) {
    const config = { headers: { "x-access-token": this.context.token } };
    if (name === "") {
      this.apiGetCategories();
      return;
    }
    axios.get(`/api/admin/find-category/${name}`, config).then((res) => {
      const result = res.data;
      console.log(result);
      this.setState({ categories: result.categories });
    });
  }
  // apis
  apiGetCategories() {
    const config = { headers: { "x-access-token": this.context.token } };
    axios.get("/api/admin/categories", config).then((res) => {
      const result = res.data;
      this.setState({ categories: result });
    });
  }
}
export default Category;
