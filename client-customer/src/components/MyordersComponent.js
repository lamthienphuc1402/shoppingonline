import axios from 'axios';
import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import MyContext from '../contexts/MyContext';

class Myorders extends Component {
  static contextType = MyContext; // using this.context to access global state
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      order: null
    };
  }
  render() {
    if (this.context.token === '') return (<Navigate replace to='/login' />);
    const orders = this.state.orders.map((item, index) => {
      return (
        // <tr key={item._id} className="datatable table-fixed w-full" onClick={() => this.trItemClick(item)}>
        //   <td>{item._id}</td>
        //   <td>{new Date(item.cdate).toLocaleString()}</td>
        //   <td>{item.customer.name}</td>
        //   <td>{item.customer.phone}</td>
        //   <td>{item.total}</td>
        //   <td className='text-[5px] sm:text-lg'>{item.status}</td>
        // </tr>
        <>
          <div
            className={`grid grid-cols-6 w-full text-center gap-x-2 sm:text-lg text-sm hover:cursor-pointer sm:py-5  hover:bg-blue-300 ${index % 2 === 0 ? "bg-gray-200" : "bg-slate-50"
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
              className={` font-bold ${item.status === "APPROVED" ? "text-green-700 sm:text-lg text-[11px]" : "text-yellow-700 sm:text-lg text-[11px]"
                }`}
            >
              {item.status}
            </div>
          </div>

        </>
      );
    });
    if (this.state.order) {
      var items = this.state.order.items.map((item, index) => {
        return (
          // <tr key={item.product._id} className="datatable table-fixed w-full">
          //   <td>{index + 1}</td>
          //   <td>{item.product._id}</td>
          //   <td>{item.product.name}</td>
          //   <td><img src={"data:image/jpg;base64," + item.product.image} width="70px" height="70px" alt="" /></td>
          //   <td>{item.product.price}</td>
          //   <td>{item.quantity}</td>
          //   <td>{item.product.price * item.quantity}</td>
          // </tr>
          <div key={item.product._id} className="lg:max-w-[50rem] sm:gap-x-2 gap-x-5 my-3 py-4 px-6 shadow-md rounded-xl  hover:bg-gray-300 flex flex-row  justify-center items-center bg-white ">
            <div className='w-3/5'>
              <img src={"data:image/jpg;base64," + item.product.image} className='' alt="" />
            </div>
            <div className='w-2/5 sm:text-lg text-sm '>
              <div className=' font-semibold text-black'>Item {index + 1}</div>
              <div className='text-xs font-extralight text-gray-600'>{item.product._id}</div>
              <div className='font-bold uppercase text-xl mt-1 text-black'>{item.product.name}</div>
              <div className='font-medium mt-1 text-black'>Category: {item.product.category.name}</div>
              <div className='font-normal mt-1 text-black'>Price: {item.product.price} $</div>
              <div className='font-normal mt-1 text-black'>Quantity: {item.quantity}</div>
              <div className='font-normal mt-1 text-black'>Total: {item.product.price * item.quantity} $</div>
            </div>
          </div>
        );
      });
    }
    return (
      <div>
        <div className="align-center sm:px-[5rem] px-2 mt-5">
          {/* <h2 className="text-center">ORDER LIST</h2>
          <table className="datatable table-fixed w-full text-black" border="1">
            <tbody>
              <tr className="datatable">
                <th>ID</th>
                <th>Creation date</th>
                <th>Cust.name</th>
                <th>Cust.phone</th>
                <th>Total</th>
                <th>Status</th>
              </tr>
              {orders}
            </tbody>
          </table> */}
          <h2 className="text-center font-bold mt-5 text-3xl mb-3">
            ORDER LIST
          </h2>
          <div className='shadow-xl rounded-xl'>

            <div className="grid grid-cols-6 w-full text-center gap-x-5 font-bold bg-gradient-to-r from-sky-500 to-indigo-500 text-white sm:text-lg text-[15px]">
              <div>ID</div>
              <div>Creation date</div>
              <div>Customer name</div>
              <div>Customer phone</div>
              <div>Total</div>
              <div>Status</div>

            </div>
            {orders}
          </div>
        </div>
        {
          this.state.order ?
            // <div className="align-center">
            //   <h2 className="text-center table-fixed w-full">ORDER DETAIL</h2>
            //   <table className="datatable" border="1">
            //     <tbody>
            //       <tr className="datatable">
            //         <th>No.</th>
            //         <th>Prod.ID</th>
            //         <th>Prod.name</th>
            //         <th>Image</th>
            //         <th>Price</th>
            //         <th>Quantity</th>
            //         <th>Amount</th>
            //       </tr>
            //       {items}
            //     </tbody>
            //   </table>
            // </div>
            <div className='px-2 w-full'>
              <div className="align-center shadow-[0_0_60px_-10px] shadow-primary-700 rounded-lg overflow-hidden bg-gradient-to-r from-sky-500 to-indigo-500 my-5">
                <h2 className="text-center text-white mb-2 font-bold text-4xl">ITEM LIST</h2>
                <div className='w-full'>
                  <div className='bg-gray-100 flex justify-center items-center flex-col sm:px-12 md:px-12 px-2'>
                    {items}
                  </div>
                </div>
                <div className='lg:max-w-[50rem] text-white flex justify-end items-center align-middle h-[3rem]'>

                </div>
              </div>
            </div>
            : <div />
        }
      </div >
    );
  }
  componentDidMount() {
    if (this.context.customer) {
      const cid = this.context.customer._id;
      this.apiGetOrdersByCustID(cid);
    }
  }
  // event-handlers
  trItemClick(item) {
    this.setState({ order: item });
  }
  // apis
  apiGetOrdersByCustID(cid) {
    const config = { headers: { 'x-access-token': this.context.token } };
    axios.get('/api/customer/orders/customer/' + cid, config).then((res) => {
      const result = res.data;
      this.setState({ orders: result });
    });
  }
}
export default Myorders;