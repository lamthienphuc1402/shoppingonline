import React, { Component } from 'react';
import MyContext from '../contexts/MyContext';
import CartUtil from '../utils/CartUtil';
import axios from 'axios';
import withRouter from '../utils/withRouter';

class Mycart extends Component {
    static contextType = MyContext; // using this.context to access global state
    render() {
        const mycart = this.context.mycart.map((item, index) => {
            return (
                <>
                    <div key={item.product._id} className="lg:max-w-[50rem] sm:gap-x-2 gap-x-1 my-3 py-4 px-6 shadow-md rounded-xl hover:bg-gray-300 flex flex-row  justify-center items-center bg-white ">
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
                            <div className='text-center text-white font-semibold mt-3 px-3 py-2 rounded-lg bg-red-400 hover:bg-red-500'><button onClick={() => this.lnkRemoveClick(item.product._id)}>Remove</button></div>
                        </div>
                    </div>
                </>
            );
        });
        return (
            <div className='px-2 w-full'>
                <div className="align-center shadow-[0_0_60px_-10px] shadow-primary-700 rounded-lg overflow-hidden bg-gradient-to-r from-sky-500 to-indigo-500 my-5">
                    <h2 className="text-center text-white mb-2 font-bold text-4xl">ITEM LIST</h2>
                    <div className='w-full'>
                        <div className='bg-gray-100 flex justify-center items-center flex-col sm:px-12 md:px-12 px-2'>
                            {mycart}
                        </div>
                    </div>
                    <div className='lg:max-w-[50rem] text-white flex justify-end items-center align-middle'>
                        <div className='text-xl font-semibold mx-3'>Total: {CartUtil.getTotal(this.context.mycart)}</div>
                        <button className='flex justify-center text-xl items-center text-center text-white font-semibold my-2 mr-3 px-3 py-2 rounded-lg bg-black hover:shadow-xl' onClick={() => this.lnkCheckoutClick()}>CHECKOUT</button>
                    </div>
                </div>
            </div>
        );
    }
    // event-handlers
    lnkCheckoutClick() {
        if (window.confirm('ARE YOU SURE?')) {
            if (this.context.mycart.length > 0) {
                const total = CartUtil.getTotal(this.context.mycart);
                const items = this.context.mycart;
                const customer = this.context.customer;
                if (customer) {
                    this.apiCheckout(total, items, customer);
                } else {
                    this.props.navigate('/login');
                }
            } else {
                alert('Your cart is empty');
            }
        }
    }
    // apis
    apiCheckout(total, items, customer) {
        const body = { total: total, items: items, customer: customer };
        const config = { headers: { 'x-access-token': this.context.token } };
        axios.post('/api/customer/checkout', body, config).then((res) => {
            const result = res.data;
            if (result) {
                alert('OK BABY!');
                this.context.setMycart([]);
                this.props.navigate('/home');
            } else {
                alert('SORRY BABY!');
            }
        });
    }
    // event-handlers
    lnkRemoveClick(id) {
        const mycart = this.context.mycart;
        const index = mycart.findIndex(x => x.product._id === id);
        if (index !== -1) { // found, remove item
            mycart.splice(index, 1);
            this.context.setMycart(mycart);
        }
    }
}
export default withRouter(Mycart);