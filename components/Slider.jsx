import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Card from "../components/Card";

const Slider = () => {
  return (
    <Splide
      options={{
        rewind: true,
        gap: "1em",
        perMove: 1,
        perPage: 4,
        autoplay: true,
              autoWidth: true,
        padding:10,

        breakpoints: {
          1000: {
            perPage: 3,
          },
          600: {
            perPage: 1,
              arrows: false,
              pagination:false
          },
        },
      }}
    >
      <SplideSlide>
        <Card />
      </SplideSlide>
      <SplideSlide>
        <Card />
      </SplideSlide>
      <SplideSlide>
        <Card />
      </SplideSlide>
      <SplideSlide>
        <Card />
      </SplideSlide>
      <SplideSlide>
        <Card />
      </SplideSlide>
      <SplideSlide>
        <Card />
      </SplideSlide>
      <SplideSlide>
        <Card />
      </SplideSlide>
      <SplideSlide>
        <Card />
      </SplideSlide>
      <SplideSlide>
        <Card />
      </SplideSlide>
      <SplideSlide>
        <Card />
      </SplideSlide>
      <SplideSlide>
        <Card />
      </SplideSlide>
      <SplideSlide>
        <Card />
      </SplideSlide>
      <SplideSlide>
        <Card />
      </SplideSlide>
    </Splide>
  );
};

export default Slider;
