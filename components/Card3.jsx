import Image from "next/image";
import React from "react";
import { ClipLoader } from "react-spinners";
import useSWR from "swr";
import { fetcher } from "../lib/fetch";
import Card2 from "./Card2";

const Card3 = ({ cat }) => {
  const { data, error } = useSWR(
    `https://fakestoreapi.com/products/category/${cat}`,
    fetcher
  );

  if (!data) {
    return (
      <div className="w-full flex items-center justify-center">
        {" "}
        <ClipLoader size={150} />
      </div>
    );
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
};

export default Card3;
