import React from "react";
import CarouselComponent from "./CarouselComponent";

const SwiperSlider = ({ title, category }: any) => {
  return (
    <section className="w-[90%]">
      <CarouselComponent title={title} category={category} />
    </section>
  );
};

export default SwiperSlider;
