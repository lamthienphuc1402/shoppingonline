import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import HottestComponent from './HottestComponent';
// import Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles

import { Pagination } from 'swiper/modules';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newprods: [],
            hotprods: []
        };
    }
    render() {
        const newprods = this.state.newprods.map((item) => {
            return (
                <div key={item._id}>
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
        const hotprods = this.state.hotprods.map((item) => {
            return (
                <div key={item._id}>
                    <Card className='hov shadow-2xl'>
                        <Link to={'/product/' + item._id}><Card.Img className='hover:opacity-50 ' variant="top" src={"data:image/jpg;base64," + item.image} width="300px" height="300px" alt="" /></Link>
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
            <div>
                <Container>
                    <div>
                        <div >
                            {this.state.hotprods && (

                                <HottestComponent product={this.state.hotprods} />
                            )}
                            <h2 className="text-center font-bold my-3 text-4xl">NEW PRODUCTS</h2>
                            <div className="grid sm:grid-cols-3 grid-cols-1 gap-3">
                                {newprods}
                            </div>
                        </div>
                        {this.state.hotprods.length > 0 ?
                            <div className="align-center mt-5 mb-5">
                                <h2 className="text-center font-bold my-3 text-4xl">HOT PRODUCTS</h2>
                                <div className="grid sm:grid-cols-3 grid-cols-1 gap-3">
                                    {hotprods}
                                </div>
                            </div>
                            : <div />}
                    </div>
                </Container>
            </div>
        );
    }
    componentDidMount() {
        this.apiGetNewProducts();
        this.apiGetHotProducts();
    }
    // apis
    apiGetNewProducts() {
        axios.get('/api/customer/products/new').then((res) => {
            const result = res.data;
            this.setState({ newprods: result });
        });
    }
    apiGetHotProducts() {
        axios.get('/api/customer/products/hot').then((res) => {
            const result = res.data;
            this.setState({ hotprods: result });
        });
    }
}
export default Home;