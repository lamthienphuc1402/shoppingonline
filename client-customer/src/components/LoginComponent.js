import axios from 'axios';
import React, { Component } from 'react';
import MyContext from '../contexts/MyContext';
import withRouter from '../utils/withRouter';
import {
    Input,
    Ripple,
    initTE,
} from "tw-elements";

initTE({ Input, Ripple });


class Login extends Component {
    static contextType = MyContext; // using this.context to access global state
    constructor(props) {
        super(props);
        this.state = {
            txtUsername: '',
            txtPassword: ''
        };
    }
    render() {
        return (
            <div className="align-center w-full">
                <div className="h-full px-2 lg:py-20 md:py-15 w-full">
                    <div
                        className="g-6 w-full flex h-full flex-wrap items-center justify-center lg:justify-between shadow-2xl px-12 py-24 rounded-3xl">
                        {/* <!-- Left column container with background--> */}
                        <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
                            <img
                                src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                                className="w-full"
                                alt="Phone image" />
                        </div>

                        {/* <!-- Right column container with form --> */}
                        <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
                            <h2 className="text-center h-3 font-bold mb-8">LOGIN</h2>
                            <form>
                                {/* <!-- Email input --> */}
                                <div className="relative mb-6" data-te-input-wrapper-init>
                                    <label className='h-4 font-medium'>Username</label>
                                    <input
                                        type="text" value={this.state.txtUsername} onChange={(e) => { this.setState({ txtUsername: e.target.value }) }}
                                        className="peer block min-h-[auto] w-full rounded border-1 bg-transparent px-3 py-[0.32rem] leading-[2.15] transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 "
                                        id="exampleFormControlInput3"
                                        placeholder="Username"
                                    />
                                </div>

                                {/* <!-- Password input --> */}
                                <div className="relative mb-6" data-te-input-wrapper-init>
                                    <label className='h-4 font-medium'>Password</label>
                                    <input
                                        type="password" value={this.state.txtPassword} onChange={(e) => { this.setState({ txtPassword: e.target.value }) }}
                                        className="peer block min-h-[auto] w-full rounded border-1 bg-transparent px-3 py-[0.32rem] leading-[2.15] transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200"
                                        id="exampleFormControlInput33"
                                        placeholder="Password" />

                                </div>

                                {/* <!-- Remember me checkbox --> */}


                                {/* <!-- Submit button --> */}
                                <button
                                    type="submit" value="LOGIN" onClick={(e) => this.btnLoginClick(e)}
                                    className="inline-block w-full rounded bg-primary px-7 pb-2.5 pt-3 text-base font-bold uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                    data-te-ripple-init
                                    data-te-ripple-color="light">
                                    login
                                </button>

                                {/* <!-- Divider --> */}
                                <div
                                    className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                                    <p
                                        className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                                        DON'T HAVE A ACCOUNT?
                                    </p>
                                </div>
                                <button
                                    type="submit"
                                    className="inline-block w-full rounded bg-red-600 px-7 pb-2.5 pt-3 text-base uppercase leading-normal text-white font-bold shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-red-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-red-600 focus:shadow-[0_8px_9px_-4px_rgba(202, 59, 59,0.3),0_4px_18px_0_rgba(202, 59, 59,0.2)] focus:outline-none focus:ring-0 active:bg-red-700 active:shadow-[0_8px_9px_-4px_rgba(202, 59, 59,0.3),0_4px_18px_0_rgba(202, 59, 59,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(202, 59, 59,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(202, 59, 59,0.2),0_4px_18px_0_rgba(202, 59, 59,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(202, 59, 59,0.2),0_4px_18px_0_rgba(202, 59, 59,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(202, 59, 59,0.2),0_4px_18px_0_rgba(202, 59, 59,0.1)]"
                                    data-te-ripple-init
                                    data-te-ripple-color="light"
                                    onClick={() => this.btnSignup()}>
                                    Sign up
                                </button>




                            </form>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
    // event-handlers
    btnLoginClick(e) {
        e.preventDefault();
        const username = this.state.txtUsername;
        const password = this.state.txtPassword;
        if (username && password) {
            const account = { username: username, password: password };
            this.apiLogin(account);
        } else {
            alert('Please input username and password');
        }
    }
    // apis
    apiLogin(account) {
        axios.post('/api/customer/login', account).then((res) => {
            const result = res.data;
            if (result.success === true) {
                this.context.setToken(result.token);
                this.context.setCustomer(result.customer);
                this.props.navigate('/home');
            } else {
                alert(result.message);
            }
        });
    }
    btnSignup() {

        this.props.navigate('/signup');

    }
}
export default withRouter(Login);