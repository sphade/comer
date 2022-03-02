import { MenuAlt4Icon, MenuIcon } from "@heroicons/react/outline";
import { MenuAlt1Icon } from "@heroicons/react/solid";
import React from "react";

const SecondHeader = () => {
  return (
    <div className=" flex items-center h-[30px] bg-primary_light px-10">
      <p className="flex items-center font-black text-white space-x-2">
        <MenuIcon className="h-10 w-7" />

        <span>Categories</span>
      </p>
    </div>
  );
};

export default SecondHeader;
