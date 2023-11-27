import axios from "axios";
import React, { Component } from "react";
import MyContext from "../contexts/MyContext";

class Customer extends Component {
  static contextType = MyContext; // using this.context to access global state
  constructor(props) {
    super(props);
    this.state = {
      customers: [],
      orders: [],
      order: null,
      customerName: "",
    };
  }
  render() {
    const customers = this.state.customers.map((item, index) => {
      return (
        <div
          key={index}
          className={` ${
            index % 2 === 0 ? "bg-yellow-200" : "bg-white"
          }  grid grid-cols-8 w-full text-center gap-x-2 hover:cursor-pointer hover:bg-blue-300`}
          onClick={() => this.trCustomerClick(item)}
        >
          <div className="line-clamp-2">{item._id}</div>
          <div className="line-clamp-2">{item.username}</div>
          <div className="line-clamp-2">{item.password}</div>
          <div className="line-clamp-2">{item.name}</div>
          <div className="line-clamp-2">{item.phone}</div>
          <div className="line-clamp-2">{item.email}</div>
          <div className="line-clamp-2">{item.active}</div>
          <div>
            {item.active === 0 ? (
              <span className="link" onClick={() => this.lnkEmailClick(item)}>
                EMAIL
              </span>
            ) : (
              <span className="line-clamp-2">DEACTIVE</span>
            )}
          </div>
        </div>
      );
    });
    const orders = this.state.orders.map((item, index) => {
      return (
        <div
          key={item._id}
          className={`sm:text-lg text-sm ${
            index % 2 === 0 ? "bg-yellow-200" : "bg-white"
          }  grid grid-cols-6 w-full text-center gap-x-2 hover:cursor-pointer hover:bg-blue-300`}
          onClick={() => this.trOrderClick(item)}
        >
          <div className="line-clamp-1">{item._id}</div>
          <div>{new Date(item.cdate).toLocaleString()}</div>
          <div>{item.customer.name}</div>
          <div>{item.customer.phone}</div>
          <div>{item.total}</div>
          <div
            className={`font-bold ${
              item.status === "APPROVED" ? "text-green-500" : "text-red-500"
            }`}
          >
            {item.status}
          </div>
        </div>
      );
    });
    if (this.state.order) {
      var items = this.state.order.items.map((item, index) => {
        return (
          <div
            key={item.product._id}
            className={`sm:text-lg text-sm ${
              index % 2 === 0 ? "bg-yellow-200" : "bg-white"
            }  grid grid-cols-7 w-full text-center gap-x-2 hover:cursor-pointer hover:bg-blue-300`}
          >
            <div>{index + 1}</div>
            <div className="line-clamp-1">{item.product._id}</div>
            <div>{item.product.name}</div>
            <div className="flex justify-center items-center w-full">
              <img
                src={"data:image/jpg;base64," + item.product.image}
                width="70px"
                height="70px"
                alt=""
              />
            </div>
            <div>{item.product.price}</div>
            <div>{item.quantity}</div>
            <div>{item.product.price * item.quantity}</div>
          </div>
        );
      });
    }
    return (
      <div className="w-full">
        <div className="mb-5">
          <h2 className="text-center font-bold mt-5 text-3xl mb-3">
            CUSTOMER LIST
          </h2>
          <div className="w-full flex flex-row sm:justify-end sm:items-end justify-center items-center mb-3">
            <div className="mr-4 ">
              <input
                type="text"
                value={this.state.customerName}
                className="border border-black py-2 px-1 mr-2"
                placeholder="Input your customer name"
                onChange={(e) =>
                  this.setState({ customerName: e.target.value })
                }
              />
              <button
                className="bg-green-500 rounded-lg hover:bg-green-800 py-2 px-3 text-white font-bold"
                onClick={() => this.handleSearch(this.state.customerName)}
              >
                Search
              </button>
            </div>
          </div>
          <div className="grid grid-cols-8 w-full text-center gap-x-2 font-bold bg-yellow-400">
            <div>ID</div>
            <div className="line-clamp-1">Username</div>
            <div className="line-clamp-1">Password</div>
            <div>Name</div>
            <div>Phone</div>
            <div>Email</div>
            <div>Active</div>
            <div>Action</div>
          </div>

          {this.state.customers.length === 0 ? (
            <div className="font-bold text-3xl h-full flex justify-center items-center mt-2">{`Can't find this name`}</div>
          ) : (
            customers
          )}
        </div>
        {this.state.orders.length > 0 ? (
          <div className="w-full">
            <h2 className="text-center font-bold mt-5 text-3xl mb-3">
              ORDER LIST
            </h2>
            <div className="grid grid-cols-6 w-full text-center gap-x-2 font-bold bg-yellow-400">
              <div>ID</div>
              <div>Creation date</div>
              <div>Customer name</div>
              <div>Customer phone</div>
              <div>Total</div>
              <div>Status</div>
            </div>
            {orders}
          </div>
        ) : (
          <div />
        )}
        {this.state.order ? (
          <div className="w-full">
            <h2 className="text-center font-bold mt-5 text-3xl mb-3">
              ORDER DETAILS
            </h2>
            <div className="grid grid-cols-7 w-full text-center gap-x-2 font-bold bg-yellow-400">
              <div>No.</div>
              <div>Product ID</div>
              <div>Product name</div>
              <div>Image</div>
              <div>Price</div>
              <div>Quantity</div>
              <div>Amount</div>
            </div>

            {items}
          </div>
        ) : (
          <div />
        )}
      </div>
    );
  }
  componentDidMount() {
    this.apiGetCustomers();
  }
  // event-handlers
  lnkEmailClick(item) {
    this.apiGetCustomerSendmail(item._id);
  }
  // apis
  apiGetCustomerSendmail(id) {
    const config = { headers: { "x-access-token": this.context.token } };
    axios.get("/api/admin/customers/sendmail/" + id, config).then((res) => {
      const result = res.data;
      alert(result.message);
    });
  }
  // event-handlers
  trCustomerClick(item) {
    this.setState({ orders: [], order: null });
    this.apiGetOrdersByCustID(item._id);
  }
  trOrderClick(item) {
    this.setState({ order: item });
  }
  // apis
  handleSearch(username) {
    if (this.state.orders.length > 0) this.setState({ orders: [] });
    const config = { headers: { "x-access-token": this.context.token } };
    if (username === "") {
      this.apiGetCustomers();
      return;
    }
    axios.get(`/api/admin/find-customer/${username}`, config).then((res) => {
      const result = res.data;
      console.log(result);
      this.setState({ customers: result.customers });
    });
  }
  apiGetCustomers() {
    const config = { headers: { "x-access-token": this.context.token } };
    axios.get("/api/admin/customers", config).then((res) => {
      const result = res.data;
      this.setState({ customers: result });
    });
  }
  apiGetOrdersByCustID(cid) {
    const config = { headers: { "x-access-token": this.context.token } };
    axios.get("/api/admin/orders/customer/" + cid, config).then((res) => {
      const result = res.data;
      this.setState({ orders: result });
    });
  }
}
export default Customer;
