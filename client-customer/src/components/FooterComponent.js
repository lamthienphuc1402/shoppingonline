import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FooterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    };
  }
  render() {
    const cates = this.state.categories.map((item) => {
      return (
        <Link className='link mb-3 flex justify-center uppercase lg:justify-start ' to={'/product/category/' + item._id}>
          {item.name}
        </Link>
      );
    });

    return (
      // <!-- Footer container -->
      <div className='bottom-0 w-full shadow-2xl dark:shadow-primary mt-20' >
        {/* <!-- Footer --> */}
        {/* <!-- Main container div: holds the entire content of the footer, including four sections (TW elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. --> */}
        <div className="py-10 text-center md:text-left">
          <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* <!-- TW elements section --> */}
            <div className="flex text-center justify-center items-center">
              <Link to='/home' className='link'> <h1 className='font-extrabold text-4xl'>Kiki Shopping</h1></Link>
            </div>
            {/* <!-- Products section --> */}
            {/* <div className="">
              <Link className='link'>
                <h6
                  className="mb-4 flex justify-center font-semibold uppercase lg:justify-start">
                  Categories
                </h6>
              </Link>

              {cates}



            </div> */}
            <div>
              <Link className='link'>
                <h6
                  className="mb-4 flex justify-center font-semibold uppercase lg:justify-start">
                  Contact
                </h6>
              </Link>
              <Link className='link'>
                <p className="mb-4 flex items-center justify-center lg:justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mr-3 h-5 w-5">
                    <path
                      d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                    <path
                      d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                  </svg>
                  Ho Chi Minh City, HCM 70000, VN
                </p>
              </Link>
              <Link className='link'>
                <p className="mb-4 flex items-center justify-center lg:justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mr-3 h-5 w-5">
                    <path
                      d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path
                      d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                  </svg>
                  tpnightcore42@gmail.com
                </p>
              </Link>
              <Link className='link'>
                <p className="mb-4 flex items-center justify-center lg:justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mr-3 h-5 w-5">
                    <path
                      fill-rule="evenodd"
                      d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                      clip-rule="evenodd" />
                  </svg>
                  +84 29 457 258
                </p>
              </Link>
              <Link className='link'>
                <p className="flex items-center justify-center lg:justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mr-3 h-5 w-5">
                    <path
                      fill-rule="evenodd"
                      d="M7.875 1.5C6.839 1.5 6 2.34 6 3.375v2.99c-.426.053-.851.11-1.274.174-1.454.218-2.476 1.483-2.476 2.917v6.294a3 3 0 003 3h.27l-.155 1.705A1.875 1.875 0 007.232 22.5h9.536a1.875 1.875 0 001.867-2.045l-.155-1.705h.27a3 3 0 003-3V9.456c0-1.434-1.022-2.7-2.476-2.917A48.716 48.716 0 0018 6.366V3.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM16.5 6.205v-2.83A.375.375 0 0016.125 3h-8.25a.375.375 0 00-.375.375v2.83a49.353 49.353 0 019 0zm-.217 8.265c.178.018.317.16.333.337l.526 5.784a.375.375 0 01-.374.409H7.232a.375.375 0 01-.374-.409l.526-5.784a.373.373 0 01.333-.337 41.741 41.741 0 018.566 0zm.967-3.97a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H18a.75.75 0 01-.75-.75V10.5zM15 9.75a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V10.5a.75.75 0 00-.75-.75H15z"
                      clip-rule="evenodd" />
                  </svg>
                  + 01 234 567 89
                </p>
              </Link>
            </div>
            <div className='md:col-span-2 xs:col-span-1'>
              <Link className='link' to='/gmap' >
                <h6
                  className="mb-2 flex justify-center font-semibold uppercase lg:justify-start">
                  Where's Kiki
                </h6>

              </Link>
              
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.787874151555!2d106.69744577593306!3d10.827539189324334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528f4a62fce9b%3A0xc99902aa1e26ef02!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBWxINuIExhbmc!5e0!3m2!1svi!2s!4v1701110409521!5m2!1svi!2s" className='border-0 w-full h-full p-2 px-3' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            {/* <!-- Contact section --> */}

          </div>
        </div>

        {/* <!--Copyright section--> */}
        <div className=" p-6 text-center  flex justify-center items-center shadow-2xl dark:shadow-primary-600">
          <Link className='link' to='/home'>
            <span>© 2023 Copyright: Kiki Shopping</span>
          </Link>
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.apiGetCategories();
  }
  // apis
  apiGetCategories() {
    axios.get('/api/customer/categories').then((res) => {
      const result = res.data;
      this.setState({ categories: result });
    });
  }
}
export default FooterComponent;