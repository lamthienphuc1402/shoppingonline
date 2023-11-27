import axios from "axios";
import React, { Component } from "react";
import MyContext from "../contexts/MyContext";

class CategoryDetail extends Component {
  static contextType = MyContext; // using this.context to access global state
  constructor(props) {
    super(props);
    this.state = {
      txtID: "",
      txtName: "",
    };
  }
  render() {
    return (
      <div className="pl-4 flex sm:justify-start justify-center sm:items-start items-center flex-col w-full">
        <h2 className="text-center font-bold mt-5 text-3xl mb-3">
          CATEGORY DETAIL
        </h2>
        <form>
          <table>
            <tbody>
              <tr>
                <td className="font-bold pr-4">ID</td>
                <td>
                  <input
                    type="text"
                    value={this.state.txtID}
                    className="border border-black px-2 rounded-md"
                    placeholder="Category's id"
                    onChange={(e) => {
                      this.setState({ txtID: e.target.value });
                    }}
                    readOnly={true}
                  />
                </td>
              </tr>
              <tr>
                <td className="font-bold pr-4">Name</td>
                <td>
                  <input
                    type="text"
                    className="border border-black px-2 rounded-md"
                    placeholder="Category's name"
                    value={this.state.txtName}
                    onChange={(e) => {
                      this.setState({ txtName: e.target.value });
                    }}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <div className="flex w-full flex-wrap sm:justify-start justify-center items-center gap-4 my-2">
            <input
              type="submit"
              value="ADD NEW"
              className="px-6 py-2 bg-green-700 hover:bg-green-500 hover:cursor-pointer font-bold rounded text-white"
              onClick={(e) => this.btnAddClick(e)}
            />
            <input
              type="submit"
              value="UPDATE"
              className="px-6 py-2 bg-yellow-700 hover:bg-yellow-500 hover:cursor-pointer font-bold rounded text-white"
              onClick={(e) => this.btnUpdateClick(e)}
            />
            <input
              type="submit"
              value="DELETE"
              className="px-6 py-2 bg-red-700 hover:bg-red-500 hover:cursor-pointer font-bold rounded text-white"
              onClick={(e) => this.btnDeleteClick(e)}
            />
          </div>
        </form>
      </div>
    );
  }
  // event-handlers
  btnDeleteClick(e) {
    e.preventDefault();
    if (window.confirm("ARE YOU SURE?")) {
      const id = this.state.txtID;
      if (id) {
        this.apiDeleteCategory(id);
      } else {
        alert("Please input id");
      }
    }
  }
  // apis
  apiDeleteCategory(id) {
    const config = { headers: { "x-access-token": this.context.token } };
    axios.delete("/api/admin/categories/" + id, config).then((res) => {
      const result = res.data;
      if (result) {
        alert("OK BABY!");
        this.apiGetCategories();
      } else {
        alert("SORRY BABY!");
      }
    });
  }
  // event-handlers
  btnAddClick(e) {
    e.preventDefault();
    const name = this.state.txtName;
    if (name) {
      const cate = { name: name };
      this.apiPostCategory(cate);
    } else {
      alert("Please input name");
    }
  }
  // apis
  apiPostCategory(cate) {
    const config = { headers: { "x-access-token": this.context.token } };
    axios.post("/api/admin/categories", cate, config).then((res) => {
      const result = res.data;
      if (result) {
        alert("OK BABY!");
        this.apiGetCategories();
      } else {
        alert("SORRY BABY!");
      }
    });
  }
  apiGetCategories() {
    const config = { headers: { "x-access-token": this.context.token } };
    axios.get("/api/admin/categories", config).then((res) => {
      const result = res.data;
      this.props.updateCategories(result);
    });
  }
  componentDidUpdate(prevProps) {
    if (this.props.item !== prevProps.item) {
      this.setState({
        txtID: this.props.item._id,
        txtName: this.props.item.name,
      });
    }
  }
  // event-handlers
  btnUpdateClick(e) {
    e.preventDefault();
    const id = this.state.txtID;
    const name = this.state.txtName;
    if (id && name) {
      const cate = { name: name };
      this.apiPutCategory(id, cate);
    } else {
      alert("Please input id and name");
    }
  }
  // apis
  apiPutCategory(id, cate) {
    const config = { headers: { "x-access-token": this.context.token } };
    axios.put("/api/admin/categories/" + id, cate, config).then((res) => {
      const result = res.data;
      if (result) {
        alert("OK BABY!");
        this.apiGetCategories();
      } else {
        alert("SORRY BABY!");
      }
    });
  }
}
export default CategoryDetail;
