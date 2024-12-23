"use client";
import axios from "axios";
import * as React from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { X } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Command as CommandPrimitive } from "cmdk";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type Framework = Record<"value" | "label", string>;
const FRAMEWORKS = [
  {
    value: "drama",
    label: "Drama",
  },
  {
    value: "action",
    label: "Action",
  },

  {
    value: "horror",
    label: "Horror",
  },
  {
    value: "sci-fi",
    label: "Sci-fi",
  },
  {
    value: "comedy",
    label: "Comedy",
  },
  {
    value: "adventure",
    label: "Adventure",
  },
  {
    value: "romance",
    label: "Romance",
  },
] satisfies Framework[];

const Page = () => {
  const [postInputs, setPostInputs] = useState({
    title: "",
    type: [],
    description: "",
    langauge: "",
    year: "",
    runtime: "",
    certification: "",
    popularity: "",
    userId: "",
  });

  // dropdown feature
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<Framework[]>([]);
  const [inputValue, setInputValue] = React.useState("");
  const handleUnselect = React.useCallback((framework: Framework) => {
    setSelected((prev) => prev.filter((s) => s.value !== framework.value));
  }, []);
  console.log("selected: ", selected);

  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      const input = inputRef.current;
      if (input) {
        if (e.key === "Delete" || e.key === "Backspace") {
          if (input.value === "") {
            setSelected((prev) => {
              const newSelected = [...prev];
              newSelected.pop();
              return newSelected;
            });
          }
        }
        // This is not a default behaviour of the <input /> field
        if (e.key === "Escape") {
          input.blur();
        }
      }
    },
    []
  );
  const selectables = FRAMEWORKS.filter(
    (framework) => !selected.includes(framework)
  );

  console.log(selectables, selected, inputValue);
  // -----------------

  const [posterFile, setPosterFile] = useState<File | null>(null);
  const [backgroundFile, setBackgroundFile] = useState<File | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      if (name === "poster") {
        setPosterFile(files ? files[0] : null);
      } else if (name === "backgroundImage") {
        setBackgroundFile(files ? files[0] : null);
      }
    } else {
      setPostInputs((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleOnSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();

    Object.keys(postInputs).forEach((key) => {
      // If the key is 'type' (which is an array), convert it to a string
      if (Array.isArray(postInputs[key])) {
        // Join the array into a string, separated by commas (or any separator you need)
        formData.append(key, postInputs[key].join(","));
      } else {
        formData.append(key, postInputs[key]);
      }
    });

    if (posterFile) formData.append("poster", posterFile);
    if (backgroundFile) formData.append("backgroundImage", backgroundFile);

    try {
      const response = await axios.post(
        "http://localhost:8000/upload-movie",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response);
    } catch (error) {
      console.error("Error uploading movie:", error);
    }
  };

  return (
    <div className="w-[720px] text-white  ml-40">
      <h1 className="text-xl font-bold">Admin Dashbord</h1>
      <h1 className="font-bold">
        Admin id: 63770880-65b6-49ae-8d87-f8303238db66
      </h1>
      <p className="mt-7 mb-4">Create Movie</p>

      <Dialog>
        <DialogTrigger className="bg-blue-800 p-3 rounded-xl">
          Open
        </DialogTrigger>
        <DialogContent className="w-[950px] bg-gray-900 text-white">
          <DialogHeader>
            {/* <DialogTitle>Are you absolutely sure?</DialogTitle> */}
            <DialogDescription>
              <form
                onSubmit={handleOnSubmit}
                encType="multipart/form-data"
                className="grid grid-cols-2 mt-10 space-y-2 space-x-3 w-full"
              >
                <label>
                  Title:
                  <input
                    type="text"
                    name="title"
                    value={postInputs.title}
                    placeholder="Movie Title"
                    onChange={handleInputChange}
                    className="w-full  bg-gray-600 p-2 rounded-xl"
                  />
                </label>
                <div>
                  <Command
                    onKeyDown={handleKeyDown}
                    className="overflow-visible bg-transparent"
                  >
                    <div className="group rounded-md  border mt-4 border-input px-3 py-2 text-sm ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
                      <div className="flex flex-wrap gap-1">
                        {selected.map((framework) => {
                          return (
                            <Badge key={framework.value} variant="secondary">
                              {framework.label}
                              <button
                                className="ml-1 rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2"
                                onKeyDown={(e) => {
                                  if (e.key === "Enter") {
                                    handleUnselect(framework);
                                  }
                                }}
                                onMouseDown={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                }}
                                onClick={() => handleUnselect(framework)}
                              >
                                <X className="h-3 w-3 text-muted-foreground hover:text-foreground" />
                              </button>
                            </Badge>
                          );
                        })}
                        {/* Avoid having the "Search" Icon */}
                        <CommandPrimitive.Input
                          ref={inputRef}
                          value={inputValue}
                          onValueChange={setInputValue}
                          onBlur={() => setOpen(false)}
                          onFocus={() => setOpen(true)}
                          placeholder="Select Types..."
                          className="ml-2 flex-1 bg-transparent outline-none placeholder:text-muted-foreground"
                        />
                      </div>
                    </div>
                    <div className="relative mt-2">
                      <CommandList>
                        {open && selectables.length > 0 ? (
                          <div className="absolute bg-gray-700 top-0 z-10 w-full rounded-md border bg-popover text-popover-foreground shadow-md outline-none animate-in">
                            <CommandGroup className="h-full bg-gray-800 overflow-auto">
                              {selectables.map((framework) => {
                                return (
                                  <CommandItem
                                    key={framework.value}
                                    onMouseDown={(e) => {
                                      e.preventDefault();
                                      e.stopPropagation();
                                    }}
                                    onSelect={(value) => {
                                      setInputValue("");
                                      setSelected((prev) => [
                                        ...prev,
                                        framework,
                                      ]);
                                    }}
                                    className={"cursor-pointer"}
                                  >
                                    {framework.label}
                                  </CommandItem>
                                );
                              })}
                            </CommandGroup>
                          </div>
                        ) : null}
                      </CommandList>
                    </div>
                  </Command>
                </div>
                <label>
                  Description:
                  <input
                    type="text"
                    name="description"
                    value={postInputs.description}
                    placeholder="Movie Description"
                    onChange={handleInputChange}
                    className="w-full p-2 rounded-xl bg-gray-600 "
                  />
                </label>
                <label>
                  Language:
                  <input
                    type="text"
                    name="langauge"
                    value={postInputs.langauge}
                    placeholder="Movie Language"
                    onChange={handleInputChange}
                    className="w-full p-2 rounded-xl bg-gray-600 "
                  />
                </label>
                <label>
                  Year:
                  <input
                    type="text"
                    name="year"
                    value={postInputs.year}
                    placeholder="Release Year"
                    onChange={handleInputChange}
                    className="w-full p-2 rounded-xl bg-gray-600 "
                  />
                </label>
                <label>
                  Runtime:
                  <input
                    type="text"
                    name="runtime"
                    value={postInputs.runtime}
                    placeholder="Runtime"
                    onChange={handleInputChange}
                    className="w-full p-2 rounded-xl bg-gray-600 "
                  />
                </label>
                <label>
                  Certification:
                  <input
                    type="text"
                    name="certification"
                    value={postInputs.certification}
                    placeholder="Certification"
                    onChange={handleInputChange}
                    className="w-full p-2 rounded-xl bg-gray-600 "
                  />
                </label>
                <label>
                  Popularity:
                  <input
                    type="text"
                    name="popularity"
                    value={postInputs.popularity}
                    placeholder="Popularity"
                    onChange={handleInputChange}
                    className="w-full p-2 rounded-xl bg-gray-600 "
                  />
                </label>
                <label>
                  User ID:
                  <input
                    type="text"
                    name="userId"
                    value={postInputs.userId}
                    placeholder="User ID"
                    onChange={handleInputChange}
                    className="w-full p-2 rounded-xl bg-gray-600 "
                  />
                </label>
                <label>
                  Poster Image:
                  <input
                    type="file"
                    name="poster"
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  Background Image:
                  <input
                    type="file"
                    name="backgroundImage"
                    onChange={handleInputChange}
                  />
                </label>
                <button
                  className="  rounded-xl bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-5 py-2.5 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  type="submit"
                >
                  Add Movie
                </button>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Page;
