import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Card from "../components/Card";
import useSWR from "swr";
import { fetcher} from "../lib/fetch";
import { ClipLoader } from "react-spinners";

const Slider = () => {
  const { data, error } = useSWR(
    "https://fakestoreapi.com/products/category/electronics",
    fetcher
  );

  if (!data) {
    return  <div className="w-full flex items-center justify-center">  <ClipLoader  size={150} /></div>  
  }
  if (error) {
    return <div>there was an error</div>;
  }
  return (
    <div className="max-w-9xl mx-auto md:px-5 py-2 bg-white">
      <Splide
        options={{
          rewind: true,
          gap: "1em",
          perMove: 1,
          perPage: 5,
autoplay:true,
          padding: 10,

          breakpoints: {
            1000: {
              perPage: 3,
            },
            600: {
              perPage: 3,
               arrows: false,
              pagination: false,
            },
          },
        }}
      >
        {data.map(({ id, title, price, category, description, image }) => (
          <SplideSlide key={id}>
            <Card image={image} price={price} title={title} />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Slider;
