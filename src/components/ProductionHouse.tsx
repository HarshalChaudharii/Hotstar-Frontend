"use client";
import React from "react";
import disney from "../../public/disney.png";
import marvel from "../../public/marvel.png";
import nationalG from "../../public/nationalG.png";
import pixar from "../../public/pixar.png";
import starwar from "../../public/starwar.png";
import Image from "next/image";

const starwarV = "/assets/videos/star.mp4";
const disneyV = "/assets/videos/disney.mp4";
const marvelV = "/assets/videos/marvel.mp4";
const nationalGeographicV = "/assets/videos/national.mp4";
const pixarV = "/assets/videos/pixar.mp4";

function ProductionHouse() {
  const productionHouseList = [
    {
      id: 1,
      image: disney,
      video: disneyV,
    },
    {
      id: 2,
      image: pixar,
      video: pixarV,
    },
    {
      id: 3,
      image: marvel,
      video: marvelV,
    },
    {
      id: 4,
      image: starwar,
      video: starwarV,
    },
    {
      id: 5,
      image: nationalG,
      video: nationalGeographicV,
    },
    {
      id: 6,
      image: pixar,
      video: pixarV,
    },
  ];
  return (
    <div className="flex gap-2 md:gap-5 mt-12  ">
      {productionHouseList.map((item, index) => (
        <div
          key={index}
          className=" bg-[#171821] 
             hover:scale-110 transition-all duration-300
            ease-in-out cursor-pointer relative shadow-xl 
  
            "
        >
          <video
            src={item.video}
            autoPlay
            loop
            playsInline
            muted
            className="absolute z-0  top-0 rounded-md 
            opacity-0 hover:opacity-50"
          />
          <Image src={item.image} width={200} height={50} alt="image" />
        </div>
      ))}
    </div>
  );
}

export default ProductionHouse;
