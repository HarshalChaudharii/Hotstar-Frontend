import {
  ChartColumnStacked,
  CircleUserRound,
  Clapperboard,
  Dumbbell,
  House,
  Search,
  Tv,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="w-full ">
      <ul className="flex flex-col space-y-8 text-[20px] group mt-44 ml-10 fixed  ">
        <li>
          <Link className="flex space-x-3" href="#">
            <span className="transform transition-all duration-500 group-hover:scale-125">
              <CircleUserRound />
            </span>
            <span className="transform transition-all duration-500 translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-4">
              My Space
            </span>
          </Link>
        </li>
        <li>
          <Link className="flex space-x-3" href="#">
            <span className="transform transition-all duration-500 group-hover:scale-125  ">
              <Search />
            </span>
            <span className="transform transition-all duration-500 translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-4">
              Search
            </span>
          </Link>
        </li>
        <li>
          <Link className="flex space-x-3" href="#">
            <span className="transform transition-all duration-500 group-hover:scale-125">
              <House />
            </span>
            <span className="transform transition-all duration-500 translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-4">
              Home
            </span>
          </Link>
        </li>
        <li>
          <Link className="flex space-x-3" href="#">
            <span className="transform transition-all duration-500 group-hover:scale-125">
              <Tv />
            </span>
            <span className="transform transition-all duration-500 translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-4">
              TV
            </span>
          </Link>
        </li>
        <li>
          <Link className="flex space-x-3" href="#">
            <span className="transform transition-all duration-500 group-hover:scale-125">
              <Clapperboard />
            </span>
            <span className="transform transition-all duration-500 translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-4">
              Movies
            </span>
          </Link>
        </li>
        <li>
          <Link className="flex space-x-3" href="#">
            <span className="transform transition-all duration-500 group-hover:scale-125">
              <Dumbbell />
            </span>
            <span className="transform transition-all duration-500 translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-4">
              Sports
            </span>
          </Link>
        </li>
        <li>
          <Link className="flex space-x-3" href="#">
            <span className="transform transition-all duration-500 group-hover:scale-125">
              <ChartColumnStacked />
            </span>
            <span className="transform transition-all duration-500 translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-4">
              Categories
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
