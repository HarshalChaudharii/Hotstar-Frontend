"use client";

import React from "react";
import { Plus } from "lucide-react";

import ReactPlayer from "react-player/youtube";

const Hero = () => {
  return (
    <section className="w-full h-screen ">
      <div className="z-0">
        <div className="relative h-screen">
          <div className="flex h-full w-full ">
            {/* <ReactPlayer
              url="/assets/videos/Mufasa.mp4"
              playing={true}
              width="100%"
              height="100%"
              controls={false}
              muted={true}
            /> */}
            {/* <iframe src="/assets/videos/Mufasa.mp4"  frameborder="0"></iframe> */}

            <div className="w-[420px] absolute left-32 top-[140px] z-50">
              <div className="mt-32">
                <h3 className="text-sky-500 font-semibold mb-5">Newly Added</h3>

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
      </div>
      {/* </Slider> */}
    </section>
  );
};

export default Hero;
