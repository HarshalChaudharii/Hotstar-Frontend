"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Forest from "../../public/assets/Poster/Forest.png";
import Inception from "../../public/assets/Poster/Inception.jpg";
import Jurasic from "../../public/assets/Poster/Jurasic.jpg";
import Tom from "../../public/assets/Poster/tom.jpg";
import barbie from "../../public/assets/Poster/barbie.jpg";
import Kalki from "../../public/assets/Poster/Kalki.jpeg";
import yugam from "../../public/assets/Poster/yugam.jpeg";
import { Plus } from "lucide-react";
export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide relative">
          <div className="text-white absolute ">
            <div className="">
              <div className="w-[420px] absolute left-32 top-[140px] z-50">
                <div className="mt-32">
                  <h3 className="text-sky-500 font-semibold mb-5">
                    Newly Added
                  </h3>

                  <div className="flex font-bold space-x-3 items-center ">
                    <span>2024</span>
                    <div className="w-1 h-1 bg-gray-300 rounded-full" />
                    <span>2h 21m</span>
                    <div className="w-1 h-1 bg-gray-300 rounded-full" />
                    <span>2h 21m Telugu</span>
                    <div className="w-1 h-1 bg-gray-300 rounded-full" />
                    <span>U/A 16+</span>
                  </div>

                  <p className="w-full mt-3 text-gray-300">
                    Raghav's sole ambition is to take his bride on a trip to
                    Paris. An amusing journey begins when he discovers that his
                    wife Anandi has split personality disorder.
                  </p>
                  <div className="mt-6 flex items-center space-x-2">
                    <span>Horror</span>
                    <div className="w-px h-3 bg-gray-300" />
                    <span>Comedy</span>
                    <span>Romance</span>
                    <div className="w-px h-3 bg-gray-300" />
                    <span>Couples</span>
                    <div className="w-px h-3 bg-gray-300" />
                    <span>Humour</span>
                  </div>
                </div>

                <div className="flex items-center justify-between w-full space-x-4 mt-12 ">
                  <button className="w-full py-3 bg-white rounded-xl bg-opacity-10 text-white px-4  hover:bg-opacity-20 transition">
                    Subscribe to Watch
                  </button>
                  <div className="p-2 bg-white rounded-xl bg-opacity-10 text-white px-4 py-3 hover:bg-opacity-20 transition">
                    <Plus />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Image
            src={Forest}
            alt="poster"
            width={1920}
            height={1080}
            className="w-full h-full"
          />
        </div>
        <div className="embla__slide">
          <div className="text-white absolute ">
            <div className="flex h-full w-full ">
              <div className="w-[420px] absolute left-32 top-[140px] z-50">
                <div className="mt-32">
                  <h3 className="text-sky-500 font-semibold mb-5">
                    Newly Added
                  </h3>

                  <div className="flex font-bold space-x-3 items-center ">
                    <span>2024</span>
                    <div className="w-1 h-1 bg-gray-300 rounded-full" />
                    <span>2h 21m</span>
                    <div className="w-1 h-1 bg-gray-300 rounded-full" />
                    <span>2h 21m Telugu</span>
                    <div className="w-1 h-1 bg-gray-300 rounded-full" />
                    <span>U/A 16+</span>
                  </div>

                  <p className="w-full mt-3 text-gray-300">
                    Raghav's sole ambition is to take his bride on a trip to
                    Paris. An amusing journey begins when he discovers that his
                    wife Anandi has split personality disorder.
                  </p>
                  <div className="mt-6 flex items-center space-x-2">
                    <span>Horror</span>
                    <div className="w-px h-3 bg-gray-300" />
                    <span>Comedy</span>
                    <span>Romance</span>
                    <div className="w-px h-3 bg-gray-300" />
                    <span>Couples</span>
                    <div className="w-px h-3 bg-gray-300" />
                    <span>Humour</span>
                  </div>
                </div>

                <div className="flex items-center justify-between w-full space-x-4 mt-12 ">
                  <button className="w-full py-3 bg-white rounded-xl bg-opacity-10 text-white px-4  hover:bg-opacity-20 transition">
                    Subscribe to Watch
                  </button>
                  <div className="p-2 bg-white rounded-xl bg-opacity-10 text-white px-4 py-3 hover:bg-opacity-20 transition">
                    <Plus />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Image
            src={yugam}
            alt="poster"
            width={1920}
            height={1080}
            className="w-full"
          />
        </div>
        <div className="embla__slide">
          <div className="text-white absolute ">
            <div className="flex h-full w-full ">
              <div className="w-[420px] absolute left-32 top-[140px] z-50">
                <div className="mt-32">
                  <h3 className="text-sky-500 font-semibold mb-5">
                    Newly Added
                  </h3>

                  <div className="flex font-bold space-x-3 items-center ">
                    <span>2024</span>
                    <div className="w-1 h-1 bg-gray-300 rounded-full" />
                    <span>2h 21m</span>
                    <div className="w-1 h-1 bg-gray-300 rounded-full" />
                    <span>2h 21m Telugu</span>
                    <div className="w-1 h-1 bg-gray-300 rounded-full" />
                    <span>U/A 16+</span>
                  </div>

                  <p className="w-full mt-3 text-gray-300">
                    Raghav's sole ambition is to take his bride on a trip to
                    Paris. An amusing journey begins when he discovers that his
                    wife Anandi has split personality disorder.
                  </p>
                  <div className="mt-6 flex items-center space-x-2">
                    <span>Horror</span>
                    <div className="w-px h-3 bg-gray-300" />
                    <span>Comedy</span>
                    <span>Romance</span>
                    <div className="w-px h-3 bg-gray-300" />
                    <span>Couples</span>
                    <div className="w-px h-3 bg-gray-300" />
                    <span>Humour</span>
                  </div>
                </div>

                <div className="flex items-center justify-between w-full space-x-4 mt-12 ">
                  <button className="w-full py-3 bg-white rounded-xl bg-opacity-10 text-white px-4  hover:bg-opacity-20 transition">
                    Subscribe to Watch
                  </button>
                  <div className="p-2 bg-white rounded-xl bg-opacity-10 text-white px-4 py-3 hover:bg-opacity-20 transition">
                    <Plus />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Image
            src={Inception}
            alt="poster"
            width={1920}
            height={1080}
            className="w-full h-full"
          />
        </div>
        <div className="embla__slide">
          <div className="text-white absolute ">
            <div className="flex h-full w-full ">
              <div className="w-[420px] absolute left-32 top-[140px] z-50">
                <div className="mt-32">
                  <h3 className="text-sky-500 font-semibold mb-5">
                    Newly Added
                  </h3>

                  <div className="flex font-bold space-x-3 items-center ">
                    <span>2024</span>
                    <div className="w-1 h-1 bg-gray-300 rounded-full" />
                    <span>2h 21m</span>
                    <div className="w-1 h-1 bg-gray-300 rounded-full" />
                    <span>2h 21m Telugu</span>
                    <div className="w-1 h-1 bg-gray-300 rounded-full" />
                    <span>U/A 16+</span>
                  </div>

                  <p className="w-full mt-3 text-gray-300">
                    Raghav's sole ambition is to take his bride on a trip to
                    Paris. An amusing journey begins when he discovers that his
                    wife Anandi has split personality disorder.
                  </p>
                  <div className="mt-6 flex items-center space-x-2">
                    <span>Horror</span>
                    <div className="w-px h-3 bg-gray-300" />
                    <span>Comedy</span>
                    <span>Romance</span>
                    <div className="w-px h-3 bg-gray-300" />
                    <span>Couples</span>
                    <div className="w-px h-3 bg-gray-300" />
                    <span>Humour</span>
                  </div>
                </div>

                <div className="flex items-center justify-between w-full space-x-4 mt-12 ">
                  <button className="w-full py-3 bg-white rounded-xl bg-opacity-10 text-white px-4  hover:bg-opacity-20 transition">
                    Subscribe to Watch
                  </button>
                  <div className="p-2 bg-white rounded-xl bg-opacity-10 text-white px-4 py-3 hover:bg-opacity-20 transition">
                    <Plus />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Image
            src={Jurasic}
            alt="poster"
            width={1920}
            height={1080}
            className="w-full h-full"
          />
        </div>
        <div className="embla__slide relative">
          <div className="text-white absolute ">
            <div className="flex h-full w-full ">
              <div className="w-[420px] absolute left-32 top-[140px] z-50">
                <div className="mt-32">
                  <h3 className="text-sky-500 font-semibold mb-5">
                    Newly Added
                  </h3>

                  <div className="flex font-bold space-x-3 items-center ">
                    <span>2024</span>
                    <div className="w-1 h-1 bg-gray-300 rounded-full" />
                    <span>2h 21m</span>
                    <div className="w-1 h-1 bg-gray-300 rounded-full" />
                    <span>2h 21m Telugu</span>
                    <div className="w-1 h-1 bg-gray-300 rounded-full" />
                    <span>U/A 16+</span>
                  </div>

                  <p className="w-full mt-3 text-gray-300">
                    Raghav's sole ambition is to take his bride on a trip to
                    Paris. An amusing journey begins when he discovers that his
                    wife Anandi has split personality disorder.
                  </p>
                  <div className="mt-6 flex items-center space-x-2">
                    <span>Horror</span>
                    <div className="w-px h-3 bg-gray-300" />
                    <span>Comedy</span>
                    <span>Romance</span>
                    <div className="w-px h-3 bg-gray-300" />
                    <span>Couples</span>
                    <div className="w-px h-3 bg-gray-300" />
                    <span>Humour</span>
                  </div>
                </div>

                <div className="flex items-center justify-between w-full space-x-4 mt-12 ">
                  <button className="w-full py-3 bg-white rounded-xl bg-opacity-10 text-white px-4  hover:bg-opacity-20 transition">
                    Subscribe to Watch
                  </button>
                  <div className="p-2 bg-white rounded-xl bg-opacity-10 text-white px-4 py-3 hover:bg-opacity-20 transition">
                    <Plus />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Image
            src={Tom}
            alt="poster"
            width={1920}
            height={1080}
            className="w-full h-full"
          />
        </div>

        <div className="embla__slide relative">
          <div className="text-white absolute ">
            <div className="flex h-full w-full ">
              <div className="w-[420px] absolute left-32 top-[140px] z-50">
                <div className="mt-32">
                  <h3 className="text-sky-500 font-semibold mb-5">
                    Newly Added
                  </h3>

                  <div className="flex font-bold space-x-3 items-center ">
                    <span>2024</span>
                    <div className="w-1 h-1 bg-gray-300 rounded-full" />
                    <span>2h 21m</span>
                    <div className="w-1 h-1 bg-gray-300 rounded-full" />
                    <span>2h 21m Telugu</span>
                    <div className="w-1 h-1 bg-gray-300 rounded-full" />
                    <span>U/A 16+</span>
                  </div>

                  <p className="w-full mt-3 text-gray-300">
                    Raghav's sole ambition is to take his bride on a trip to
                    Paris. An amusing journey begins when he discovers that his
                    wife Anandi has split personality disorder.
                  </p>
                  <div className="mt-6 flex items-center space-x-2">
                    <span>Horror</span>
                    <div className="w-px h-3 bg-gray-300" />
                    <span>Comedy</span>
                    <span>Romance</span>
                    <div className="w-px h-3 bg-gray-300" />
                    <span>Couples</span>
                    <div className="w-px h-3 bg-gray-300" />
                    <span>Humour</span>
                  </div>
                </div>

                <div className="flex items-center justify-between w-full space-x-4 mt-12 ">
                  <button className="w-full py-3 bg-white rounded-xl bg-opacity-10 text-white px-4  hover:bg-opacity-20 transition">
                    Subscribe to Watch
                  </button>
                  <div className="p-2 bg-white rounded-xl bg-opacity-10 text-white px-4 py-3 hover:bg-opacity-20 transition">
                    <Plus />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Image
            src={Kalki}
            alt="poster"
            width={1920}
            height={1080}
            className="w-full h-full"
          />
        </div>
        <div className="embla__slide relative">
          <div className="text-white absolute ">
            <div className="flex h-full w-full ">
              <div className="w-[420px] absolute left-32 top-[140px] z-50">
                <div className="mt-32">
                  <h3 className="text-sky-500 font-semibold mb-5">
                    Newly Added
                  </h3>

                  <div className="flex font-bold space-x-3 items-center ">
                    <span>2024</span>
                    <div className="w-1 h-1 bg-gray-300 rounded-full" />
                    <span>2h 21m</span>
                    <div className="w-1 h-1 bg-gray-300 rounded-full" />
                    <span>2h 21m Telugu</span>
                    <div className="w-1 h-1 bg-gray-300 rounded-full" />
                    <span>U/A 16+</span>
                  </div>

                  <p className="w-full mt-3 text-gray-300">
                    Raghav's sole ambition is to take his bride on a trip to
                    Paris. An amusing journey begins when he discovers that his
                    wife Anandi has split personality disorder.
                  </p>
                  <div className="mt-6 flex items-center space-x-2">
                    <span>Horror</span>
                    <div className="w-px h-3 bg-gray-300" />
                    <span>Comedy</span>
                    <span>Romance</span>
                    <div className="w-px h-3 bg-gray-300" />
                    <span>Couples</span>
                    <div className="w-px h-3 bg-gray-300" />
                    <span>Humour</span>
                  </div>
                </div>

                <div className="flex items-center justify-between w-full space-x-4 mt-12 ">
                  <button className="w-full py-3 bg-white rounded-xl bg-opacity-20 text-white px-4  hover:bg-opacity-20 transition">
                    Subscribe to Watch
                  </button>
                  <div className="p-2 bg-white rounded-xl bg-opacity-10 text-white px-4 py-3 hover:bg-opacity-20 transition">
                    <Plus />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div></div>
          <Image
            src={barbie}
            alt="poster"
            width={1920}
            height={1080}
            className="w-full h-full absolute"
          />
        </div>
      </div>
    </div>
  );
}
