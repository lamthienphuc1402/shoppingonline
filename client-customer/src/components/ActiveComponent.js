import axios from 'axios';
import React, { Component } from 'react';
import {
  Input,
  Ripple,
  initTE,
} from "tw-elements";

initTE({ Input, Ripple });

class Active extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtID: '',
      txtToken: ''
    };
  }
  render() {
    return (
      <div>
        {/* <div className="align-center">
          <h2 className="text-center">ACTIVE ACCOUNT</h2>
          <form>
            <table className="align-center">
              <tbody>
                <tr>
                  <td>ID</td>
                  <td><input type="text" value={this.state.txtID} onChange={(e) => { this.setState({ txtID: e.target.value }) }} /></td>
                </tr>
                <tr>
                  <td>Token</td>
                  <td><input type="text" value={this.state.txtToken} onChange={(e) => { this.setState({ txtToken: e.target.value }) }} /></td>
                </tr>
                <tr>
                  <td></td>
                  <td><input type="submit" value="ACTIVE" onClick={(e) => this.btnActiveClick(e)} /></td>
                </tr>
              </tbody>
            </table>
          </form>

        </div> */}

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
                <h2 className="text-center h-3 font-bold mb-8">ACTIVE ACCOUNT</h2>
                <form>
                  {/* <!-- Email input --> */}
                  <div className="relative mb-6" data-te-input-wrapper-init>
                    <label className='h-4 font-medium'>ID</label>
                    <input
                      type="text" value={this.state.txtID} onChange={(e) => { this.setState({ txtID: e.target.value }) }}
                      className="peer block min-h-[auto] w-full rounded border-1 bg-transparent px-3 py-[0.32rem] leading-[2.15] transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 "
                      id="exampleFormControlInput3"
                      placeholder="ID"
                    />
                  </div>

                  {/* <!-- Password input --> */}
                  <div className="relative mb-6" data-te-input-wrapper-init>
                    <label className='h-4 font-medium'>Token</label>
                    <input
                      type="text" value={this.state.txtToken} onChange={(e) => { this.setState({ txtToken: e.target.value }) }}
                      className="peer block min-h-[auto] w-full rounded border-1 bg-transparent px-3 py-[0.32rem] leading-[2.15] transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200"
                      id="exampleFormControlInput33"
                      placeholder="Token" />

                  </div>

                  {/* <!-- Remember me checkbox --> */}


                  {/* <!-- Submit button --> */}
                  <button
                    type="submit" value="ACTIVE" onClick={(e) => this.btnActiveClick(e)}
                    className="inline-block w-full rounded bg-primary px-7 pb-2.5 pt-3  text-base font-bold uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    data-te-ripple-init
                    data-te-ripple-color="light">
                    ACTIVE
                  </button>






                </form>
              </div>
            </div>
          </div>

        </div>

      </div >
    );
  }
  // event-handlers
  btnActiveClick(e) {
    e.preventDefault();
    const id = this.state.txtID;
    const token = this.state.txtToken;
    if (id && token) {
      this.apiActive(id, token);
    } else {
      alert('Please input id and token');
    }
  }
  // apis
  apiActive(id, token) {
    const body = { id: id, token: token };
    axios.post('/api/customer/active', body).then((res) => {
      const result = res.data;
      if (result) {
        alert('OK BABY!');
      } else {
        alert('SORRY BABY!');
      }
    });
  }
}
export default Active;