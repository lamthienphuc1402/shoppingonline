import axios from "axios";
import React, { useState } from "react";

const ForgotPasswordComponent = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("called");
    const result = await axios.post(`/api/customer/forgot`, {
      customerEmail: email,
    });
    console.log(result.data);
  };
  return (
    <div className="align-center">
      <div className="align-center w-full">
        <div className="h-full px-2 lg:py-20 md:py-15 w-full">
          <div
            className="g-6 w-full flex h-full flex-wrap items-center justify-center lg:justify-between shadow-2xl px-12 py-24 rounded-3xl">
            {/* <!-- Left column container with background--> */}
            <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
              <img
                src="https://cdni.iconscout.com/illustration/premium/thumb/user-login-4268415-3551762.png"
                className="w-full"
                alt="Phone image" />
            </div>

            {/* <!-- Right column container with form --> */}
            <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
              <h2 className="text-center h-3 font-bold mb-8">FORGOT ACCOUNT</h2>
              <form onSubmit={handleSubmit}>
                {/* <!-- Email input --> */}
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <label className='h-4 font-medium'>Email</label>
                  <input
                    input
                    type="text"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    className="peer block min-h-[auto] w-full rounded border-1 bg-transparent px-3 py-[0.32rem] leading-[2.15] transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 "
                    id="exampleFormControlInput3"

                  />
                </div>



                {/* <!-- Remember me checkbox --> */}


                {/* <!-- Submit button --> */}
                <button
                  type="submit" value="ACTIVE"
                  className="inline-block w-full rounded bg-primary px-7 pb-2.5 pt-3  text-base font-bold uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  data-te-ripple-init
                  data-te-ripple-color="light">
                  GET NEW PASSWORD
                </button>






              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordComponent;
