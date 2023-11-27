import axios from "axios";
import React, { Component } from "react";
import MyContext from "../contexts/MyContext";

class Login extends Component {
  static contextType = MyContext; // using this.context to access global state
  constructor(props) {
    super(props);
    this.state = {
      txtUsername: "",
      txtPassword: "",
    };
  }
  render() {
    if (this.context.token === "") {
      return (
        <div className="flex justify-center items-center flex-col  h-screen space-y-5">
          <div className="border border-black p-4 space-y-5 rounded-lg">
            <h1 className="text-center text-4xl font-bold ">ADMIN LOGIN</h1>
            <form className="space-y-5">
              <div className="flex justify-center items-center">
                <label className="pr-4 font-bold">Username</label>

                <input
                  type="text"
                  value={this.state.txtUsername}
                  className="py-3 px-1.5 rounded-lg border border-black"
                  placeholder="Please input your username"
                  onChange={(e) => {
                    this.setState({ txtUsername: e.target.value });
                  }}
                />
              </div>
              <div className="flex justify-center items-center">
                <label className="pr-4 font-bold">Password</label>

                <input
                  type="password"
                  value={this.state.txtPassword}
                  className="py-3 px-1.5 rounded-lg border border-black"
                  placeholder="Please input your password"
                  onChange={(e) => {
                    this.setState({ txtPassword: e.target.value });
                  }}
                />
              </div>

              <div className="flex justify-center items-center h-fit w-full">
                <input
                  className="w-fit rounded-lg text-white font-bold hover:bg-green-500 px-4 py-2 bg-green-700 hover:cursor-pointer"
                  type="submit"
                  value="LOGIN"
                  onClick={(e) => this.btnLoginClick(e)}
                />
              </div>
            </form>
          </div>
        </div>
      );
    }
    return <div />;
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
      alert("Please input username and password");
    }
  }
  // apis
  apiLogin(account) {
    axios.post("/api/admin/login", account).then((res) => {
      const result = res.data;
      if (result.success === true) {
        this.context.setToken(result.token);
        this.context.setUsername(account.username);
      } else {
        alert(result.message);
      }
    });
  }
}
export default Login;
