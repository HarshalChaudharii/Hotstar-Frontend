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

const CarouselComponent = ({ title, category }: any) => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/${category}`,
      params: { language: "en-US", page: "1", region: "us" },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMzdlNjRkMjE1YWM0NTM5ZDU3MGIzODY2NDc0MTg5YyIsIm5iZiI6MTcyNDMyMzQ3MS42NjE5ODEsInN1YiI6IjY2YzU5Mzc3YTEwNjYwMjNlY2QxMmNiOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bsFHRmnK_nRVXBm0pfB12VjHA9UuqyluZy-qOZrhoAQ",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setData(response.data.results);
        setLoading(false);
      })
      .catch(function (error) {
        setLoading(false);
      });
  }, [category]);
  console.log(data);
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
        {data.map((item) => (
          <CarouselItem
            key={item.id}
            className="md:basis-1/2 lg:basis-[190px] "
          >
            <div className="">
              <Card className="w-44 border-none">
                {/* <CardContent className="flex aspect-square items-center justify-center p-6"> */}
                <Link href={`/details/${item.id}`}>
                  <Image
                    src={`https://image.tmdb.org/t/p/w185${item.poster_path}`}
                    width={200}
                    height={10}
                    alt={item.title || "Movie Poster"}
                    className="rounded-xl h-full w-full "
                    loading="lazy"
                  />
                </Link>
                {/* </CardContent> */}
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default CarouselComponent;
