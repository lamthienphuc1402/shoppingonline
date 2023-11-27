import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withRouter from '../utils/withRouter';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
    }
    render() {
        const prods = this.state.products.map((item) => {
            return (
                <div key={item._id} className="inline  mx-auto" style={{ paddingLeft: '1rem', paddingTop: '1rem' }}>
                    <Card className='hov shadow-2xl'>
                        <Link to={'/product/' + item._id}><Card.Img className='hover:opacity-50' variant="top" src={"data:image/jpg;base64," + item.image} width="300px" height="300px" alt="" /></Link>
                        <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Text>
                                Price: <h5>{item.price} $</h5>
                            </Card.Text>
                            <Link to={'/product/' + item._id}><Button variant="primary">See detail</Button></Link>
                        </Card.Body>
                    </Card>
                </div>
            );
        });
        return (
            <Container>
                <div className="text-center">
                    <h2 className="text-center h-3 mb-5 mt-3 font-bold mt-3 text-4xl">LIST PRODUCTS</h2>
                    <div className='grid sm:grid-cols-3 grid-cols-1 gap-3'>
                        {prods}
                    </div>
                </div>
            </Container>
        );
    }
    componentDidMount() { // first: /product/...
        const params = this.props.params;
        if (params.cid) {
            this.apiGetProductsByCatID(params.cid);
        } else if (params.keyword) {
            this.apiGetProductsByKeyword(params.keyword);
        }
    }
    componentDidUpdate(prevProps) { // changed: /product/...
        const params = this.props.params;
        if (params.cid && params.cid !== prevProps.params.cid) {
            this.apiGetProductsByCatID(params.cid);
        } else if (params.keyword && params.keyword !== prevProps.params.keyword) {
            this.apiGetProductsByKeyword(params.keyword);
        }
    }
    // apis
    apiGetProductsByKeyword(keyword) {
        axios.get('/api/customer/products/search/' + keyword).then((res) => {
            const result = res.data;
            this.setState({ products: result });
        });
    }
    // apis
    apiGetProductsByCatID(cid) {
        axios.get('/api/customer/products/category/' + cid).then((res) => {
            const result = res.data;
            this.setState({ products: result });
        });
    }
}
export default withRouter(Product);