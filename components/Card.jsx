import Image from "next/image";
import React from "react";

const Card = ({ image, price, title }) => {
  return (
    <div className="min-h-[200px] md:min-h-[350px]  border-gray-300  shadow-lg overflow-hidden   rounded-lg">
      <div className="w-full  h-[150px] md:h-[300px] relative">
        <Image src={image} alt="eeee" layout="fill" />
      </div>
      <div className="divide-y-2 space-y-2 px-2 py-3 md:py-0">
        <p className="uppercase text-xs md:text-sm font-black">
          {title.slice(0, 10)}
        </p>
        <p className="md:text-base text-xs">from {price} / day</p>
      </div>
    </div>
  );
};

export default Card;
