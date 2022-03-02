import React from "react";
import { SearchIcon } from "@heroicons/react/outline";
const Input = () => {
  return (
    <div className=" md:flex items-center space-x-2  flex-1 hidden">
      <div className="flex flex-1 rounded items-center border border-gray-300 px-1 py-2">
        <SearchIcon className="h-6 w-10   text-gray-700" />

        <input
          type="text"
          className="bg-transparent border-0 outline-none w-full"
          placeholder="Search products, brands and categories"
        />

        
      </div>
      <button className="btn"> Search</button>
    </div>
  );
};

export default Input;
