import Image from "next/image";
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

function Banner() {
  return (
    <Splide
      options={{ rewind: true, autoplay: true, width: "100vw" }}
    >
      <SplideSlide>
        <img
          src="/assets/b5.gif"
          alt="Image 1"
          className="w-screen object-cover h-[300px] md:h-[450px]"
        />
      </SplideSlide>

      <SplideSlide>
        <img
          src="/assets/b2.jpg"
          alt="Image 1"
          className="w-screen object-cover h-[300px] md:h-[450px]"
        />
      </SplideSlide>

      <SplideSlide>
        <img
          src="/assets/b4.jpg"
          alt="Image 1"
          className="w-screen object-cover h-[300px] md:h-[450px]"
        />
      </SplideSlide>
    </Splide>
  );
}

export default Banner;
