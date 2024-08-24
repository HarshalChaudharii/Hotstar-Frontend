"use client";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Loader from "./Loader";
import Image from "next/image";
import { Play, Plus } from "lucide-react";
import Footer from "./Footer";
import SwiperSlider from "./SwiperSlider";
import Link from "next/link";

const MovieDetail = ({ id, key }: any) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useRef(null);
  const scrollToTrailers = () => {
    navigate.current.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    setLoading(true);
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/${id}`,
      params: { langauge: "en-US" },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMzdlNjRkMjE1YWM0NTM5ZDU3MGIzODY2NDc0MTg5YyIsIm5iZiI6MTcyNDMyMzQ3MS42NjE5ODEsInN1YiI6IjY2YzU5Mzc3YTEwNjYwMjNlY2QxMmNiOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bsFHRmnK_nRVXBm0pfB12VjHA9UuqyluZy-qOZrhoAQ",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setData(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
        setLoading(false);
      });
  }, [id]);
  console.log(data);
  const date = "2024-06-11"; // Example date from API
  const year = date.split("-")[0];

  return (
    <section className=" text-white">
      {loading ? (
        <Loader />
      ) : (
        <div className="w-screen">
          <div className="w-full">
            {
              <div>
                <div className="relative h-screen">
                  <div className="flex h-full w-full ">
                    <Image
                      src={`https://image.tmdb.org/t/p/w780${data.backdrop_path}`}
                      alt="img"
                      width={500}
                      height={500}
                      quality={100}
                      style={{ objectFit: "cover" }}
                      loading="lazy"
                      className="w-full brightness-130 h-auto"
                    />
                    <div className="w-[520px] absolute left-28 top-[200px] z-50">
                      <div className="mt-28">
                        <h3 className="text-3xl font-semibold mb-5">
                          {data.original_title}
                        </h3>

                        <div className="flex font-bold space-x-3 items-center ">
                          <span>{year}</span>
                          <div className="w-1 h-1 bg-gray-300 rounded-full" />
                          <span>{data.runtime}</span>
                          <div className="w-1 h-1 bg-gray-300 rounded-full" />
                          <span>
                            {data.spoken_languages?.map((language) => (
                              <div key={language.iso_639_1}>
                                {language.name}
                              </div>
                            ))}
                          </span>
                          <div className="w-1 h-1 bg-gray-300 rounded-full" />
                          <span>U/A 13+</span>
                        </div>

                        <p className="w-full mt-3 text-white">
                          {data.overview}
                        </p>

                        <div className="flex">
                          {data.genres?.map((item, index): any => (
                            <div
                              className="mt-6 flex justify-center items-center "
                              key={item.id}
                            >
                              <span className="mr-3"> {item.name}</span>

                              {index < data.genres.length - 1 && (
                                <div className="w-px h-4 mr-3 bg-gray-200" />
                              )}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between w-full space-x-4 mt-12 ">
                        <button className="w-full py-3 text-black rounded-xl bg-white font-bold px-4  hover:scale-110 transition-all duration-300 text-xl">
                          <div className="flex items-center justify-center space-x-3">
                            <span>
                              <Play />
                            </span>{" "}
                            <span>Subscribe to Watch</span>
                          </div>
                        </button>
                        <div className="p-2 bg-white rounded-xl bg-opacity-20 text-white px-4 py-3 hover:bg-opacity-30 transition-all duration-300">
                          <Plus />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            }
          </div>
        </div>
      )}

      <div className="w-full ml-24 mt-6">
        <span className="flex space-x-9  mb-4 text-xl font-bold ">
          <h1 className="cursor-pointer">More Like This</h1>

          <h1
            className="cursor-pointer text-gray-400 hover:text-white "
            onClick={scrollToTrailers}
          >
            Trailers & More
          </h1>
        </span>
        <div
          ref={navigate}
          className="w-[90%] h-[1px] mr-3  bg-[#252833] mb-10 "
        />
        <SwiperSlider title="Now Playing" key={1} category={"now_playing"} />

        <h1 className="text-xl mt-12 text-white ">Trailer & More</h1>
        <SwiperSlider title="Upcoming" key={4} category={"upcoming"} />
      </div>

      <div className="-ml-36 w-screen">
        <Footer />
      </div>
    </section>
  );
};

export default MovieDetail;
