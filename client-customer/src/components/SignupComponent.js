import axios from 'axios';
import React, { Component } from 'react';
import withRouter from '../utils/withRouter';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtUsername: '',
            txtPassword: '',
            txtName: '',
            txtPhone: '',
            txtEmail: ''
        };
    }
    render() {
        return (
            <div className="align-center">
                {/* <h2 className="text-center">SIGN-UP</h2>
                <form>
                    <table className="align-center">
                        <tbody>
                            <tr>
                                <td>Username</td>
                                <td><input type="text" value={this.state.txtUsername} onChange={(e) => { this.setState({ txtUsername: e.target.value }) }} /></td>
                            </tr>
                            <tr>
                                <td>Password</td>
                                <td><input type="password" value={this.state.txtPassword} onChange={(e) => { this.setState({ txtPassword: e.target.value }) }} /></td>
                            </tr>
                            <tr>
                                <td>Name</td>
                                <td><input type="text" value={this.state.txtName} onChange={(e) => { this.setState({ txtName: e.target.value }) }} /></td>
                            </tr>
                            <tr>
                                <td>Phone</td>
                                <td><input type="tel" value={this.state.txtPhone} onChange={(e) => { this.setState({ txtPhone: e.target.value }) }} /></td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td><input type="email" value={this.state.txtEmail} onChange={(e) => { this.setState({ txtEmail: e.target.value }) }} /></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td><input type="submit" value="SIGN-UP" onClick={(e) => this.btnSignupClick(e)} /></td>
                            </tr>
                        </tbody>
                    </table>
                </form> */}
                <div className=" h-full px-6 py-15 w-full">
                    <div
                        className="g-6 w-full flex h-full flex-wrap items-center justify-center lg:justify-between shadow-2xl px-12 py-24 rounded-3xl">
                        <div
                            className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
                            <img
                                src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                className="w-full"
                                alt="Sample image" />
                        </div>

                        {/* <!-- Right column container with form --> */}
                        <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
                            <h2 className="text-center h-3 font-bold mb-8">SIGN-UP</h2>
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
                                {/* <!-- Email input --> */}
                                <div className="relative mb-6" data-te-input-wrapper-init>
                                    <label className='h-4 font-medium'>Name</label>
                                    <input
                                        type="text" value={this.state.txtName} onChange={(e) => { this.setState({ txtName: e.target.value }) }}
                                        className="peer block min-h-[auto] w-full rounded border-1 bg-transparent px-3 py-[0.32rem] leading-[2.15] transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 "
                                        id="exampleFormControlInput3"
                                        placeholder="Name"
                                    />
                                </div>

                                {/* <!-- Password input --> */}
                                <div className="relative mb-6" data-te-input-wrapper-init>
                                    <label className='h-4 font-medium'>Phone</label>
                                    <input
                                        type="tel" value={this.state.txtPhone} onChange={(e) => { this.setState({ txtPhone: e.target.value }) }}
                                        className="peer block min-h-[auto] w-full rounded border-1 bg-transparent px-3 py-[0.32rem] leading-[2.15] transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200"
                                        id="exampleFormControlInput33"
                                        placeholder="Phone" />

                                </div>
                                {/* <!-- Password input --> */}
                                <div className="relative mb-6" data-te-input-wrapper-init>
                                    <label className='h-4 font-medium'>Email</label>
                                    <input
                                        type="email" value={this.state.txtEmail} onChange={(e) => { this.setState({ txtEmail: e.target.value }) }}
                                        className="peer block min-h-[auto] w-full rounded border-1 bg-transparent px-3 py-[0.32rem] leading-[2.15] transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200"
                                        id="exampleFormControlInput33"
                                        placeholder="Email" />

                                </div>

                                {/* <!-- Remember me checkbox --> */}
                                

                                {/* <!-- Submit button --> */}
                                <button
                                    type="submit" value="SIGN-UP" onClick={(e) => this.btnSignupClick(e)}
                                    className="inline-block w-full rounded bg-red-600 px-7 pb-2.5 pt-3 text-base font-bold uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-red-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-red-600 focus:shadow-[0_8px_9px_-4px_rgba(202, 59, 59,0.3),0_4px_18px_0_rgba(202, 59, 59,0.2)] focus:outline-none focus:ring-0 active:bg-red-700 active:shadow-[0_8px_9px_-4px_rgba(202, 59, 59,0.3),0_4px_18px_0_rgba(202, 59, 59,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(202, 59, 59,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(202, 59, 59,0.2),0_4px_18px_0_rgba(202, 59, 59,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(202, 59, 59,0.2),0_4px_18px_0_rgba(202, 59, 59,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(202, 59, 59,0.2),0_4px_18px_0_rgba(202, 59, 59,0.1)]"
                                    data-te-ripple-init
                                    data-te-ripple-color="light">
                                    sign-up
                                </button>
                                {/* <!-- Divider --> */}
                                <div
                                    className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                                    <p
                                        className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                                        IF YOU HAVE A ACCOUNT?
                                    </p>
                                </div>
                                <button
                                    type="submit"
                                    className="inline-block w-full rounded bg-primary-600 px-7 pb-2.5 pt-3 text-base font-bold uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                    data-te-ripple-init
                                    data-te-ripple-color="light"
                                    onClick={() => this.btnSignin()}>
                                    login
                                </button>
                                
                            </form>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
    // event-handlers
    btnSignupClick(e) {
        e.preventDefault();
        const username = this.state.txtUsername;
        const password = this.state.txtPassword;
        const name = this.state.txtName;
        const phone = this.state.txtPhone;
        const email = this.state.txtEmail;
        if (username && password && name && phone && email) {
            const account = { username: username, password: password, name: name, phone: phone, email: email };
            this.apiSignup(account);
        } else {
            alert('Please input username and password and name and phone and email');
        }
    }
    btnSignin() {
        this.props.navigate('/login');
    }
    // apis
    apiSignup(account) {
        axios.post('/api/customer/signup', account).then((res) => {
            const result = res.data;
            alert(result.message);
        });
    }
}
export default withRouter(Signup);