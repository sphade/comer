import { PhoneIcon } from "@heroicons/react/outline";
import React from "react";
import Input from "./Input";

function Header() {
  return (
    <div  className="bg-white sticky z-10 left-0 top-0">
     
      <div>
        <div className="h-16 px-5 flex items-center justify-between ">
          <span className=" text-lg text-purple-800 font-black">
            Fake Store
          </span>
          <Input />
          <button className="btn hidden ">Login, Signup</button>
        </div>

        <div className="border flex item-center justify-between px-5 py-2 shadow">
          <ul className=" items-center hidden md:flex space-x-10 capitalize ">
            <li className="cursor-pointer">cameras</li>
            <li className="cursor-pointer">gaming</li>
            <li className="cursor-pointer">entertainment</li>
            <li className="cursor-pointer">electronic</li>
            <li className="cursor-pointer">computers</li>
          </ul>

          <div className="flex items-center">
            <PhoneIcon className="h-5 w-5" />
            07049723597
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
