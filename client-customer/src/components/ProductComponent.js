import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import withRouter from "../utils/withRouter";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      from: 0,
      to: 0,
    };
  }
  render() {
    const prods = this.state.products.map((item) => {
      return (
        <div
          key={item._id}
          className="inline  mx-auto"
          style={{ paddingLeft: "1rem", paddingTop: "1rem" }}
        >
          <Card className="hov shadow-2xl">
            <Link to={"/product/" + item._id}>
              <Card.Img
                className="hover:opacity-50"
                variant="top"
                src={"data:image/jpg;base64," + item.image}
                width="300px"
                height="300px"
                alt=""
              />
            </Link>
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>
                Price: <h5>{item.price} $</h5>
              </Card.Text>
              <Link to={"/product/" + item._id}>
                <Button variant="primary">See detail</Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
      );
    });
    return (
      <div className="lg:px-[8rem] xs:px-3">
        <div className="text-center">
          <h2 className="text-center h-3 mb-2 font-bold mt-3 text-4xl">
            LIST PRODUCTS {prods.category}
          </h2>
          <div className="md:flex justify-center xs:mt-5 items-center gap-x-3 py-3">
            <div>
              <button
                onClick={() => this.handleIncrease()}
                className="h-[3rem] xs:w-full bg-green-500 hover:bg-green-600 px-2 xs:my-3 py-1 text-white rounded-lg font-bold"
              >
                Price Increase
              </button>
            </div>
            <div>

              <button
                onClick={() => this.handleDecrease()}
                className="h-[3rem] xs:w-full bg-red-500 hover:bg-red-600  px-2 py-1 text-white rounded-lg font-bold"
              >
                Price Decrease
              </button>
            </div>
            <div className="md:flex xs:mx-3 xs:my-3 p-0 justify-center items-center rounded-xl">
              {/* <div className="xs:my-3">
              </div>
              <div className="xs:my-3">
              </div> */}
              <input
                type="number"
                placeholder="Price from"
                className="border xs:my-3 mx-0 xs:w-full border-primary-400 xs:rounded-l-lg xs:rounded-r-none rounded-md px-3 h-[3rem] "
                onChange={(e) =>
                  this.setState({ from: parseInt(e.target.value) })
                }
              />
              <input
                type="number"
                placeholder="Price to"
                className="border xs:my-3 mx-0 xs:w-full border-primary-400 xs:rounded-none rounded-md px-3 h-[3rem]"
                onChange={(e) =>
                  this.setState({ to: parseInt(e.target.value) })
                }
              />

              <button
                type="button"

                onClick={() => this.handleRange()}
                className="text-white font-semibold xs:rounded-r-lg xs:rounded-l-none xs:my-3 mx-0 xs:w-full border-primary-400 xs:rounded-none rounded-md px-3 h-[3rem] bg-primary-500 hover:bg-primary-600"
              >
                Search
              </button>
            </div>
          </div>
          <div className="grid sm:grid-cols-3 grid-cols-1 gap-3">{prods}</div>
        </div>
      </div>
    );
  }
  handleIncrease() {
    console.log("called");
    const newProducts = this.state.products.sort((a, b) => a.price - b.price);
    this.setState({ products: newProducts });
  }
  handleDecrease() {
    console.log("called");
    const newProducts = this.state.products.sort((a, b) => b.price - a.price);
    this.setState({ products: newProducts });
  }
  handleRange() {
    const { from, to } = this.state;
    console.log(from);
    if (from > to) {
      alert("Can't input from greater than to");
      return;
    }
    const newProducts = this.state.products.filter(
      (p) => p.price >= from && p.price <= to
    );
    if (newProducts.length === 0) {
      alert("Can't find a product with that range");
      return;
    }
    console.log(newProducts);
    this.setState({ products: newProducts });
  }

  componentDidMount() {
    // first: /product/...
    const params = this.props.params;
    if (params.cid) {
      this.apiGetProductsByCatID(params.cid);
    } else if (params.keyword) {
      this.apiGetProductsByKeyword(params.keyword);
    }
  }
  componentDidUpdate(prevProps) {
    // changed: /product/...
    const params = this.props.params;
    if (params.cid && params.cid !== prevProps.params.cid) {
      this.apiGetProductsByCatID(params.cid);
    } else if (params.keyword && params.keyword !== prevProps.params.keyword) {
      this.apiGetProductsByKeyword(params.keyword);
    }
  }
  // apis
  apiGetProductsByKeyword(keyword) {
    axios.get("/api/customer/products/search/" + keyword).then((res) => {
      const result = res.data;
      this.setState({ products: result });
    });
  }
  // apis
  apiGetProductsByCatID(cid) {

    axios.get("/api/customer/products/category/" + cid).then((res) => {
      const result = res.data;
      this.setState({ products: result });
    });
  }
}
export default withRouter(Product);
