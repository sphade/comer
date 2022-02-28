import Image from "next/image";
import React from "react";

const Card = () => {
  return (
    <div className="min-h-[200px] md:h-[350px] border shadow-lg overflow-hidden relative w-[150px] md:w-[250px] rounded-lg">
      <Image src="/assets/asset15.png" alt="eeee" width={250} height={250} />
      <div className="divide-y-2 space-y-2 px-2 py-3 md:py-0">
        <p className="uppercase md:text-2xl font-black">metaverse 4</p>
        <p className="md:text-base text-xs">from N-300 / day</p>
      </div>
    </div>
  );
};

export default Card;
