"use client";
import Loader from "@/components/Loader";
import MyCarousel from "@/components/MyCarousel";
import axios from "axios";
import { get } from "http";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const page = () => {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState("");
  const [options, setOptions] = useState([""]);
  useEffect(() => {
    async function getMovies() {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:8000/find", {
          params: { query: value },
        });

        setOptions(response.data.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

    getMovies();
  }, [value]);

  return (
    <section className="w-[90%] ml-24">
      <div className="flex flex-col justify-center items-center mt-10 space-y-20">
        <div className="relative border-none w-1/2">
          <input
            className="w-full pl-10 pr-3 rounded-xl p-3 text-white bg-black z-50 border-none "
            type="text"
            placeholder="Movies, Shows & More"
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <div className="absolute inset-y-0  left-0 pl-3 flex items-center opacity-50 text-white  pointer-events-none">
            <Search />
          </div>
        </div>

        <div className="ml-24 grid grid-cols-7 mx-6 rounded-xl gap-4">
          {options?.map((item: any, index) => (
            <div className="" key={index}>
              <Link href={`/details/${item.id}`}>
                <Image
                  src={`http://localhost:8000/images/${item.posterUrl}`}
                  alt="poster"
                  width={250}
                  height={200}
                  className="rounded-xl transition-transform transform hover:scale-110 w-full h-full "
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default page;

// const options = {
//   method: "GET",
//   url: "https://api.themoviedb.org/3/search/movie",
//   params: {
//     query: value,
//     include_adult: "false",
//     language: "en-US",
//     page: "1",
//     region: "us",
//   },
//   headers: {
//     accept: "application/json",
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMzdlNjRkMjE1YWM0NTM5ZDU3MGIzODY2NDc0MTg5YyIsIm5iZiI6MTcyNDMyMzQ3MS42NjE5ODEsInN1YiI6IjY2YzU5Mzc3YTEwNjYwMjNlY2QxMmNiOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bsFHRmnK_nRVXBm0pfB12VjHA9UuqyluZy-qOZrhoAQ",
//   },
// };

// const option = {
//   method: "GET",
//   url: "http://localhost:8000/find",
//   params: {
//     query: value,
//   },
// };
// axios
//   .request(option)
//   .then(function (response) {
//     setOptions(response.data);
//     setLoading(false);
//   })
//   .catch(function (error) {
//     console.error(error);
//     setLoading(false);
//   });
