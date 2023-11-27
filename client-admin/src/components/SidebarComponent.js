import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
const SidebarComponent = ({ username, isMobile, setNavbar }) => {
  const [url, setUrl] = useState("/home");
  console.log(isMobile);
  return (
    <>
      <div className="bg-red-200 h-screen px-5 flex flex-col justify-between">
        <div className="font-bold">
          <ul>
            <li
              className={`pt-5 mb-3 flex ${
                isMobile ? "flex-row justify-between items-center" : "flex-none"
              }`}
            >
              <Link
                onClick={() => setUrl("/home")}
                className={`hover:text-red-600 ${
                  url === `/home` && `text-red-500`
                }`}
                to="/admin/home"
              >
                Home
              </Link>
              {isMobile && (
                <IoMdClose
                  className="cursor-pointer"
                  onClick={() => {
                    document.body.style.overflow = "auto";
                    setNavbar(false);
                  }}
                  size={30}
                />
              )}
            </li>
            <li className="mb-3">
              <Link
                onClick={() => setUrl("/category")}
                className={`hover:text-red-600 ${
                  url === `/category` && `text-red-500`
                }`}
                to="/admin/category"
              >
                Category
              </Link>
            </li>
            <li className="mb-3">
              <Link
                onClick={() => setUrl("/product")}
                className={`hover:text-red-600 ${
                  url === `/product` && `text-red-500`
                }`}
                to="/admin/product"
              >
                Product
              </Link>
            </li>
            <li className="mb-3">
              <Link
                onClick={() => setUrl("/order")}
                className={`hover:text-red-600 ${
                  url === `/order` && `text-red-500`
                }`}
                to="/admin/order"
              >
                Order
              </Link>
            </li>
            <li className="mb-3">
              <Link
                onClick={() => setUrl("/customer")}
                className={`hover:text-red-600 ${
                  url === `/customer` && `text-red-500`
                }`}
                to="/admin/customer"
              >
                Customer
              </Link>
            </li>
          </ul>
        </div>
        <div className="pb-8">
          Hello <b>{username}</b> |{" "}
          <Link to="/admin/home" onClick={() => this.lnkLogoutClick()}>
            Logout
          </Link>
        </div>
      </div>
    </>
  );
};

export default SidebarComponent;
