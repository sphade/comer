import Image from "next/image";
import React from "react";

function Card2({ img,title,price }) {
  return (
      <div className="w-[300px] m-2 min-h-[300px] px-5 py-5  bg-white">
          <p className="font-black capitalize md:text-lg mb-2">{ title}</p>
      <div className="w-full  h-[150px] md:h-[300px]  relative">
        <Image src={img} alt="eeee" layout="fill" objectFit="contain"/>
      </div>
      <p className="text">
        {price}
      </p>
    </div>
  );
}

export default Card2;
