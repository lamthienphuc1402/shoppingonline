import React, { Component, Suspense, lazy } from 'react';
import Menu from './MenuComponent';
import Inform from './InformComponent';

import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import Product from './ProductComponent';
import ProductDetail from './ProductDetailComponent';
import Signup from './SignupComponent';
import Active from './ActiveComponent';
import Login from './LoginComponent';
import Myprofile from './MyprofileComponent';
import Mycart from './MycartComponent';
import Myorders from './MyordersComponent';
import Nav from './Navbar';
import ScrollToTop from "react-scroll-to-top";
import FooterComponent from './FooterComponent';
import Gmap from './GmapComponent';
import TawkMessenger from './TawkMessengerComponent';
import Loading from './Loading';

const Home = lazy(() => import("./HomeComponent"))


class Main extends Component {
    render() {
        return (
            <Suspense fallback={<Loading />}>

            <div className="body-customer">
                <Nav />
                    <Routes>
                        <Route path='/' element={<Navigate replace to='/home' />} />
                        <Route path='/home' element={<Home />} />
                        <Route path='/product/category/:cid' element={<Product />} />
                        <Route path='/product/search/:keyword' element={<Product />} />
                        <Route path='/product/:id' element={<ProductDetail />} />
                        <Route path='/signup' element={<Signup />} />
                        <Route path='/active' element={<Active />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/myprofile' element={<Myprofile />} />
                        <Route path='/mycart' element={<Mycart />} />
                        <Route path='/myorders' element={<Myorders />} />
                        <Route path='/gmap' element={<Gmap />} />
                    </Routes>
                <FooterComponent />
                <TawkMessenger />
                <ScrollToTop smooth color="blue" className='float-left items-center' />

            </div>
            </Suspense>
        );
    }
}
export default Main;