import axios from "axios";
import React, { Component } from "react";
import withRouter from "../utils/withRouter";
import MyContext from "../contexts/MyContext";
import CommentComponent from "./CommentComponent";

class ProductDetail extends Component {
  static contextType = MyContext;
  constructor(props) {
    super(props);
    this.state = {
      product: null,
      txtQuantity: 1,
      content: "",
      comments: [],
    };
  }
  render() {
    const prod = this.state.product;
    console.log(this.context.customer);
    if (prod != null) {
      return (
        <div className="md:px-20 sm:px-5">
          <div className="align-center w-full">
              
              <div className='flex sm:flex-row flex-col sm:justify-start justify-center items-center py-10 md:px-10 xs:px-5 shadow-2xl rounded-2xl'>
                <div className='sm:w-3/5 w-full'>
                  <img className='rounded-lg w-full shadow-1xl' src={"data:image/jpg;base64," + prod.image} alt="image" />
                </div>
                <div className='sm:w-2/5 w-full flex justify-center md:items-start md:text-start xs:items-center xs:text-center flex-col px-10'>
                  <h1 className='font-bold lg:text-5xl md:text-3xl sm:text-xl mb-4 xs:mt-5'>{prod.name}</h1>
                  <div className="mb-4 font-semibold lg:text-xl md:text-base xs:text-sm">Category: {prod.category.name}</div>
                  <div className="font-semibold lg:text-xl md:text-base xs:text-sm">
                    ID: {prod._id}
                  </div>
                  <div className='font-semibold text-2xl mt-4'><label>Price: </label> <span className='font-bold'>{`${prod.price} $`}</span></div>
                  <div className='row align-items-center mt-4'>
                    <div className='col-auto font-semibold lg:text-xl md:text-base xs:text-sm'>
                      Quantity
                    </div>
                    <div className='col-auto '>
                      <input className='mx-2 form-control' type="number" min="1" max="99" value={this.state.txtQuantity} onChange={(e) => { this.setState({ txtQuantity: e.target.value }) }} />
                    </div>
                  </div>
                  <div className=' mt-4'>
                    {/* <input
                        type="submit"
                        value="Mua ngay"s
                        className="btn btn-danger" disabled
                      /> */}
                    <button
                      type="submit"
                      onClick={(e) => this.btnAdd2CartClick(e)}
                      className="bg-primary-600 hover:bg-primary-700 shadow-primary-600 shadow-2xl uppercase text-white font-semibold text-2xl p-3"
                    >Add to cart
                    </button>
                  </div>
                </div>
              </div>

          </div>
          <div>
          <h2 className="text-center mt-3">Login to see or view comments</h2>
            <div className="flex flex-col justify-center items-center w-full gap-x-4 px-5">
              {this.state.comments.map((comment, index) => (
                <CommentComponent {...comment} key={index} />
                ))}
            </div>
            {this.context.customer && (
              <div>
                <form
                  className="flex justify-center items-center gap-x-2"
                  onSubmit={(e) => this.handleSubmit(e)}
                >
                  <input
                    type="text"
                    className="border border-black px-4 py-2 rounded-md"
                    value={this.state.content}
                    placeholder="Input your comment here"
                    onChange={(e) => this.setState({ content: e.target.value })}
                  />
                  <input
                    type="submit"
                    className="bg-primary-600 hover:bg-primary-700 px-4 py-2 rounded-lg text-white font-bold"
                    value="POST"
                  />
                </form>
              </div>
            )}
          </div>
        </div>
      );
    }
    return <div />;
  }
  // event-handlers
  btnAdd2CartClick(e) {
    e.preventDefault();
    const product = this.state.product;
    const quantity = parseInt(this.state.txtQuantity);
    if (quantity) {
      const mycart = this.context.mycart;
      const index = mycart.findIndex((x) => x.product._id === product._id); // check if the _id exists in mycart
      if (index === -1) {
        // not found, push newItem
        const newItem = { product: product, quantity: quantity };
        mycart.push(newItem);
      } else {
        // increasing the quantity
        mycart[index].quantity += quantity;
      }
      this.context.setMycart(mycart);
      alert("OK BABY!");
    } else {
      alert("Please input quantity");
    }
  }
  componentDidMount() {
    const params = this.props.params;
    this.apiGetProduct(params.id);
  }
  handleSubmit(e) {
    e.preventDefault();
    this.apiPostComment(this.state.content);
    console.log("called");
  }
  // apis
  apiGetProduct(id) {
    axios.get("/api/customer/products/" + id).then((res) => {
      const result = res.data;
      this.setState({ product: result });
      this.setState({ comments: result.comments });
    });
  }
  apiPostComment(comment) {
    const params = this.props.params;
    axios
      .post("/api/customer/comments", {
        customerId: this.context.customer._id,
        content: comment,
        productId: params.id,
      })
      .then((res) => {
        this.setState({ comments: res.data.comments });
      });
  }
}
export default withRouter(ProductDetail);
