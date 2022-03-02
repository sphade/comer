import {
  InformationCircleIcon,
  MenuIcon,
  PhoneIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/outline";
import { SearchCircleIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import Input from "./Input";
import HeaderDropDown from "./Pop";
import SecondHeader from "./SecondHeader";

function Header() {
  const [open, setopen] = useState(false);
  return (
    <div className=" sticky bg-white z-10 left-0 top-0 shadow-md">
      <div>
        <div className="h-16 px-5 flex items-center justify-between ">
          {open && <HeaderDropDown />}
          <MenuIcon
            className="h-7 w-7 md:hidden cursor-pointer"
            onClick={() => {
              setopen(!open);
            }}
          />
          <div className="md:flex hidden items-center flex-1 justify-around">
            <p className="header-icon">
              <UserIcon className="h-5 w-5 " />
              <span>About</span>
            </p>

            <p className="header-icon">
              <PhoneIcon className="h-5 w-5 " />
              <span>Contact</span>
            </p>

            <p className="header-icon">
              <ShoppingCartIcon className="h-5 w-5 " />

              <span>Enterprise</span>
            </p>
          </div>
          <span className="text-center  text-primary md:text-3xl font-black flex-1">
            Fake-Store
          </span>
          <Input />
          <SearchCircleIcon className="w-10 h-10 md:hidden" />
        </div>
      </div>
    </div>
  );
}

export default Header;
