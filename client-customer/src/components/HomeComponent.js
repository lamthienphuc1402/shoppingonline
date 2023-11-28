import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import HottestComponent from './HottestComponent';
import Loading from './Loading';



class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newprods: [],
            hotprods: [],
            loading: false,
        };
    }
    render() {
        const newprods = this.state.newprods.map((item) => {
            return (
                <div key={item._id}>
                    <Card className='hov shadow-2xl dark:shadow-primary'>
                        <Link to={'/product/' + item._id}><Card.Img className='hover:opacity-50' variant="top" src={"data:image/jpg;base64," + item.image} width="300px" height="450px" alt="" /></Link>
                        <Card.Body className='text-center items-center'>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Title><h5 className='pt-1'>{item.price} $</h5></Card.Title>
                            <Link to={'/product/' + item._id}><Button variant="primary" className='w-full'>
                                <Card.Text className=' flex justify-center items-center'>
                                    See detail
                                </Card.Text>
                            </Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </div>
            );
        });
        const hotprods = this.state.hotprods.map((item) => {
            return (
                <div key={item._id}>
                    <Card className='hov shadow-2xl dark:shadow-primary'>
                        <Link to={'/product/' + item._id}><Card.Img className='hover:opacity-50' variant="top" src={"data:image/jpg;base64," + item.image} width="300px" height="450px" alt="" /></Link>
                        <Card.Body className='text-center items-center'>
                            <Card.Title>{item.name}</Card.Title>
                            <Link to={'/product/' + item._id}><Button variant="primary" className='w-full'>
                                <Card.Text className=' flex justify-center items-center'>
                                    <h5 className='pt-1'>{item.price} $</h5>
                                </Card.Text>
                            </Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </div>
            );
        });
        return (
            <div>
                {this.state.loading ? <Loading /> : (
                    <>
                        {this.state.hotprods && (
                            <HottestComponent product={this.state.hotprods} />
                        )}
                        <div className='lg:px-[8rem] xs:px-3'>
                            <div>
                                <div className="align-center mt-5 mb-5">
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
                        </div>
                    </>
                )}
            </div>
        );
    }
    componentDidMount() {
        this.apiGetNewProducts();
        this.apiGetHotProducts();
    }
    // apis
    apiGetNewProducts() {
        this.setState({ loading: true })
        axios.get('/api/customer/products/new').then((res) => {
            const result = res.data;
            this.setState({ newprods: result, loading: false });
        });
    }
    apiGetHotProducts() {
        this.setState({ loading: true })

        axios.get('/api/customer/products/hot').then((res) => {
            const result = res.data;
            this.setState({ hotprods: result, loading: false });
        });
    }
}
export default Home;