import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import SidebarComponent from "./SidebarComponent";

const MenuMobileComponent = ({ username }) => {
  const [isNavbar, setNavbar] = useState(false);
  return (
    <>
      {isNavbar && (
        <SidebarComponent
          setNavbar={setNavbar}
          isMobile={true}
          username={username}
        />
      )}
      <div className="flex justify-between border-bottom  w-full">
        <div>
          <CiMenuBurger
            onClick={() => {
              setNavbar(true);
              document.body.style.overflow = "hidden";
            }}
            size={20}
          />
        </div>
      </div>
    </>
  );
};

export default MenuMobileComponent;
