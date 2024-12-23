"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel"; // Adjust the import path according to your file structure
import { Card, CardContent } from "./ui/card";
import Loader from "./Loader";

const MyCarousel = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function getMovies() {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:8000/action`, {
          params: {
            types: "Action",
          },
        });
        setData(response.data.data); // Setting the data from the response
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    getMovies();
  }, []);
  console.log("data hai: ", data);
  if (loading) {
    return (
      <>
        <Loader />
      </>
    );
  }

  return (
    <Carousel
      opts={{
        align: "start",
        slidesToScroll: "auto",
        loop: true,
      }}
      className="w-full max-w-full"
    >
      <CarouselContent>
        {data.map((item, index) => (
          <CarouselItem
            key={index}
            className="basis-[180px] md:basis-[180px] lg:basis-[190px] rounde-xl "
          >
            <div className="roundex-2xl">
              <Card className="w-[152px]  md:w-[162px] lg:w-54 h-full bg-cover rounded-2xl border-none">
                {/* <CardContent className="flex aspect-square items-center justify-center p-6"> */}
                <Link href={`/details/${item.id}`}>
                  <Image
                    src={`http://localhost:8000/images/${item.posterUrl}`}
                    width={200}
                    height={200}
                    alt={item.title || "Movie Poster"}
                    className=" rounded-xl h-[200px] w-full bg-cover transition-transform transform hover:scale-110"
                    loading="lazy"
                  />
                </Link>
                {/* </CardContent> */}
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="relative ">
        <div className="absolute right-[80px] -top-[95px] md:left-[10px] md:-top-[80px] lg:right-16 lg:-top-32 ">
          <CarouselNext className="border-none " />
        </div>
        <div className="absolute z-50 -top-[105px] left-12  lg:-top-32 lg:left-16 hidden ">
          <CarouselPrevious className="border-none" />
        </div>
      </div>
    </Carousel>
  );
};

export default MyCarousel;
