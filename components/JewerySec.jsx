import React from "react";
import Card2 from "./Card2";

import { fetcher } from "../lib/fetch";
import useSWR from "swr";
import { ClipLoader } from "react-spinners";
function JewerySec() {
  const { data, error } = useSWR("https://fakestoreapi.com/products", fetcher);
  if (!data) {
    return  <div className="w-full flex items-center justify-center">  <ClipLoader  size={150} /></div>  
  }
  if (error) {
    return <div>there was an error</div>;
  }
  return (
    <div>
      <div className="flex flex-wrap max-w-7xl mx-auto  justify-around  mt-[50px]">
        {data.map(({ image, category, price, title, description, id }) => (
          <Card2 key={id} img={image} title={title} price={price} />
        ))}
      </div>
    </div>
  );
}

export default JewerySec;
