import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MyContext from '../contexts/MyContext';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Badge from 'react-bootstrap/Badge';
import { FaShoppingCart } from "react-icons/fa";



class Inform extends Component {
    static contextType = MyContext; // using this.context to access global state
    constructor(props) {
        super(props);
        this.state = {
            theme: "dark"
        }
    }
    render() {
        return (
            // <div className="border-bottom">
            //     <div className="float-left">
            //         {this.context.token === '' ?
            //             <div><Link to='/login'>Login</Link> | <Link to='/signup'>Sign-up</Link> | <Link to='/active'>Active</Link></div>
            //             :
            //             <div>Hello <b>{this.context.customer.name}</b> | <Link to='/home' onClick={() => this.lnkLogoutClick()}>Logout</Link> | <Link to='/myprofile'>My profile</Link> | <Link to='/myorders'>My orders</Link></div>
            //         }
            //     </div>
            //     <div className="float-right">
            //         <Link to='/mycart'>My cart</Link> have <b>{this.context.mycart.length}</b> items
            //     </div>
            //     <div className="float-clear" />
            // </div>
            <Navbar className="bg-body-tertiary" style={{ maxHeight: '85px' }}>
                <Container fluid>
                    {this.context.token === '' ?
                        <Nav>
                            <Nav.Link><Link className='link' to='/login'>Login</Link></Nav.Link>
                            <Nav.Link><Link className='link' to='/signup'>Sign-up</Link></Nav.Link>
                            <Nav.Link><Link className='link' to='/active'>Active</Link></Nav.Link>
                        </Nav>
                        :
                        <Nav>
                            <Nav.Link>Hello <Link className='link' to='/myprofile'>{this.context.customer.name}</Link></Nav.Link>
                            <Nav.Link><Link className='link' to='/home' onClick={() => this.lnkLogoutClick()}>Logout</Link></Nav.Link>
                            <Nav.Link><Link className='link' to='/myorders'>My orders</Link></Nav.Link>
                        </Nav>
                    }
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id='navbarScroll ' className='justify-content-end'>
                        <div className='flex flex-row justify-center items-center'>
                        <Link to='/mycart'>
                            <div className='flex flex-row justify-center items-center'>
                                <div className='relative'>

                                    <FaShoppingCart size={23} />
                                    <Badge className='absolute -top-2 -right-4' bg="secondary">{this.context.mycart.length}</Badge>
                                </div>
                            </div>
                            <span className="visually-hidden">unread messages</span>
                        </Link>
                        {/* <div className="form-switch ml-5">
                            <input className="form-check-input" type='checkbox' onChange={(e) => this.ckbChangeMode(e)}
                            />&nbsp; Light / Dark mode
                        </div> */}
                        {
                            this.state.theme === "light" ? (
                                <div
                                    id="theme-switcher"
                                    onClick={() => this.ckbChangeMode(this.state.theme)}
                                    className=" cursor-pointer block w-full whitespace-nowrap bg-transparent px-3 py-2 text-sm font-normal text-gray-700 hover:bg-gray-100 focus:bg-gray-200 focus:outline-none active:text-zinc-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-gray-400 dark:text-gray-100 dark:hover:bg-gray-600 focus:dark:bg-gray-600"
                                    key="light"
                                    data-theme="light">
                                    <div className="pointer-events-none">
                                        <div
                                            className=" inline-block w-[35px] text-center"
                                            data-theme-icon="light">
                                            <Link className='link'>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                    className="  inline-block h-6 w-6">
                                                    <path
                                                        d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                                                </svg>
                                            </Link>
                                        </div>

                                    </div>
                                </div>
                            ) : (
                                <div
                                    id="theme-switcher"
                                    onClick={() => this.ckbChangeMode(this.state.theme)}
                                    key="dark"

                                    className=" cursor-pointer block w-full whitespace-nowrap bg-transparent px-3 py-2 text-sm font-normal text-gray-700 hover:bg-gray-100 focus:bg-gray-200 focus:outline-none active:text-zinc-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-gray-400 dark:text-gray-100 dark:hover:bg-gray-600 focus:dark:bg-gray-600"

                                    data-theme="dark"
                                    data-te-dropdown-item-ref>
                                    <div className="pointer-events-none">
                                        <div
                                            className="inline-block w-[35px] text-center  "
                                            data-theme-icon="dark">
                                            <Link className='link'>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                    className="inline-block h-6 w-6">
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                                                        clip-rule="evenodd" />
                                                </svg>
                                            </Link>
                                        </div>

                                    </div>
                                </div>
                            )
                        }
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
    // event-handlers
    lnkLogoutClick() {
        this.context.setToken('');
        this.context.setCustomer(null);
        this.context.setMycart([]);
    }
    ckbChangeMode(userTheme) {
        userTheme === "light" ? this.setState({ theme: "dark" }) : this.setState({ theme: "light" })
        document.documentElement.setAttribute('data-bs-theme', userTheme);
        document.documentElement.setAttribute('data-theme-name', userTheme);



    }

}
export default Inform;