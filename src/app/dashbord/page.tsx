"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Delete, Edit, Search } from "lucide-react";
import DemoForm from "@/components/DemoForm";

const Page = () => {
  const [data, setData] = useState([]);
  const [formType, setFormType] = useState("create");
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");

  const userId = "d51b5480-c06f-4a65-9c47-62fae847fb7a";

  async function getMovies() {
    try {
      setFormType("create");
      setIsLoading(true);
      const response = await axios.get(
        `http://localhost:8000/get-movie/${userId}?search=${search}`
      );
      setData(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    getMovies();
  }, [search]);

  const refreshData = async () => {
    await getMovies();
  };
  const handleDeleteMovie = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/movie-delete/${id}`);
      getMovies();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-[80%] mt-24 text-white ml-48  ">
      {/* <CreateMovie /> */}

      <div className="relative w-full border-none ">
        <input
          className="w-full justify-self-center mb-12 pl-10 pr-3 rounded-xl p-3 text-white bg-black z-50 border-none "
          type="text"
          placeholder="Movies, Shows & More"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <div className="absolute top-3  left-0 pl-3 flex items-center opacity-50 text-white  pointer-events-none">
          <Search />
        </div>
      </div>

      <DemoForm getMovies={refreshData} data={data} formType={"create"} />
      <div className="">
        <Table>
          <TableCaption>Your Created Movies</TableCaption>
          <TableHeader>
            <TableRow className="">
              <TableHead className="w-[100px]">Poster</TableHead>
              <TableHead className="w-[200px]">Title</TableHead>
              <TableHead className="w-[200px]">Type</TableHead>
              <TableHead className="w-[400px]">Description</TableHead>
              <TableHead className=" text-right">
                <span className="mr-4">Delete</span>
              </TableHead>
              <TableHead className=" text-right">
                <span className="mr-5">Edit</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item, index) => (
              <TableRow key={item.id}>
                <TableCell>
                  <Link href={`/details/${item.id}`}>
                    <Image
                      src={`http://localhost:8000/images/${item.posterUrl}`}
                      alt="img"
                      width={250}
                      height={250}
                      className="w-full h-full rounde-xl bg-cover"
                    />
                  </Link>
                </TableCell>
                <TableCell>{item.title}</TableCell>
                <TableCell>
                  {item.type.map((it) => (
                    <span className="mr-3">{it}</span>
                  ))}
                </TableCell>
                <TableCell>{item.description}</TableCell>
                <TableCell className="">
                  <div
                    className="ml-60 cursor-pointer  "
                    onClick={() => {
                      handleDeleteMovie(item.id);
                    }}
                  >
                    <Delete className="text-red-600 mr-7 " />
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  <DemoForm
                    getMovies={refreshData}
                    formType={"update"}
                    data={item}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Page;
