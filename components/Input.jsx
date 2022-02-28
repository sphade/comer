import React from "react";
import { SearchIcon } from "@heroicons/react/outline";
const Input = () => {
  return (
    <div className="flex px-5 rounded-lg overflow-hidden  h-10 items-center border w-[50%]">
      
        <input type="text" className="w-full border-0 outline-none" placeholder="Search for Products, brands and more" />
    
      <SearchIcon className="h-6 w-6" />
    </div>
  );
};

export default Input;
