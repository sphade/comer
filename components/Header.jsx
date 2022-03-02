import {
  InformationCircleIcon,
  MenuIcon,
  PhoneIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/outline";
import React from "react";
import Input from "./Input";
import SecondHeader from "./SecondHeader";

function Header() {
  return (
    <div className=" sticky bg-white z-10 left-0 top-0 shadow-md">
      <div>
        <div className="h-16 px-5 flex items-center justify-between ">
          <span className="  text-primary text-3xl font-black flex-1">
            Fake-Store
          </span>
          <Input />
          <div className="md:flex hidden items-center flex-1 justify-around">
          <p className="header-icon">
            <UserIcon className="h-5 w-5 " />
            <span>Account</span>
          </p>

          <p className="header-icon">
            <InformationCircleIcon className="h-5 w-5 " />
            <span>Help</span>
          </p>

          <p className="header-icon">
            <ShoppingCartIcon className="h-5 w-5 " />

            <span>Cart</span>
          </p>
          </div>
          
        </div>
      </div>
      <SecondHeader/>
    </div>
  );
}

export default Header;
