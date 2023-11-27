import axios from "axios";
import React, { Component } from "react";
import MyContext from "../contexts/MyContext";

class Order extends Component {
  static contextType = MyContext; // using this.context to access global state
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      order: null,
    };
  }
  render() {
    const orders = this.state.orders.map((item, index) => {
      return (
        <>
          <div
            className={`grid grid-cols-7 w-full text-center gap-x-2 sm:text-lg text-sm hover:cursor-pointer hover:bg-blue-300 mb-2 ${
              index % 2 === 0 ? "bg-yellow-200" : "bg-white"
            } `}
            key={index}
            onClick={() => this.trItemClick(item)}
          >
            <div className="w-full line-clamp-1">{item._id}</div>
            <div>{new Date(item.cdate).toLocaleString()}</div>
            <div>{item.customer.name}</div>
            <div>{item.customer.phone}</div>
            <div>{item.total}</div>
            <div
              className={` font-bold ${
                item.status === "APPROVED" ? "text-green-700" : "text-red-700"
              }`}
            >
              {item.status}
            </div>
            <div>
              {item.status === "PENDING" ? (
                <div className="sm:w-full w-fit  flex sm:flex-row sm:justify-center sm:items-center sm:gap-x-3 flex-col">
                  <span
                    className="link"
                    onClick={() => this.lnkApproveClick(item._id)}
                  >
                    APPROVE
                  </span>

                  <span
                    className="link"
                    onClick={() => this.lnkCancelClick(item._id)}
                  >
                    CANCEL
                  </span>
                </div>
              ) : (
                <div />
              )}
            </div>
          </div>
        </>
      );
    });
    if (this.state.order) {
      var items = this.state.order.items.map((item, index) => {
        return (
          <div
            key={index}
            className={` ${
              index % 2 === 0 ? "bg-yellow-200" : "bg-white"
            }  grid grid-cols-7 w-full text-center gap-x-2 hover:cursor-pointer hover:bg-blue-300`}
          >
            <div>{index + 1}</div>
            <div className="line-clamp-1">{item.product._id}</div>
            <div>{item.product.name}</div>
            <div className="flex justify-center items-center">
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
      <div className="w-full ">
        <div className="mb-5">
          <h2 className="text-center font-bold mt-5 text-3xl mb-3">
            ORDER LIST
          </h2>
          <div className="grid grid-cols-7 w-full text-center gap-x-2 font-bold bg-yellow-400">
            <div>ID</div>
            <div>Creation date</div>
            <div>Customer name</div>
            <div>Customer phone</div>
            <div>Total</div>
            <div>Status</div>
            <div>Action</div>
          </div>
          {orders}
        </div>
        {this.state.order ? (
          <div className="w-full ">
            <h2 className="text-center font-bold text-3xl">ORDER DETAIL</h2>
            <div className="grid grid-cols-7 w-full text-center gap-x-2 bg-yellow-400">
              <div>No.</div>
              <div>Prod.ID</div>
              <div>Prod.name</div>
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
  // event-handlers
  lnkApproveClick(id) {
    this.apiPutOrderStatus(id, "APPROVED");
  }
  lnkCancelClick(id) {
    this.apiPutOrderStatus(id, "CANCELED");
  }
  // apis
  apiPutOrderStatus(id, status) {
    const body = { status: status };
    const config = { headers: { "x-access-token": this.context.token } };
    axios.put("/api/admin/orders/status/" + id, body, config).then((res) => {
      const result = res.data;
      if (result) {
        this.apiGetOrders();
      } else {
        alert("SORRY BABY!");
      }
    });
  }
  componentDidMount() {
    this.apiGetOrders();
  }
  // event-handlers
  trItemClick(item) {
    this.setState({ order: item });
  }
  // apis
  apiGetOrders() {
    const config = { headers: { "x-access-token": this.context.token } };
    axios.get("/api/admin/orders", config).then((res) => {
      const result = res.data;
      this.setState({ orders: result });
    });
  }
}
export default Order;
