"use client";
import axios from "axios";
import * as React from "react";
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
  DialogTrigger,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";

type Framework = Record<"value" | "label", string>;
const FRAMEWORKS = [
  {
    value: "Drama",
    label: "Drama",
  },
  {
    value: "Action",
    label: "Action",
  },
  {
    value: "Horror",
    label: "Horror",
  },
  {
    value: "Sci-fi",
    label: "Sci-fi",
  },
  {
    value: "Comedy",
    label: "Comedy",
  },
  {
    value: "Adventure",
    label: "Adventure",
  },
  {
    value: "Romance",
    label: "Romance",
  },
] satisfies Framework[];

const DemoForm = ({ formType, data, getMovies }) => {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  console.log("formType: ", formType);
  const [postInputs, setPostInputs] = useState({
    title: data?.title || "",
    type: data?.type || [], // Store the selected types here
    description: data?.description || "",
    langauge: data?.langauge || "",
    year: data?.year || "",
    runtime: data?.runtime || "",
    certification: data?.certification || "",
    popularity: data?.popularity || "",
    userId: "d51b5480-c06f-4a65-9c47-62fae847fb7a",
  });

  // dropdown feature
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [open, setOpen] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("");

  const handleUnselect = React.useCallback((framework: Framework) => {
    setPostInputs((prev) => ({
      ...prev,
      type: prev.type.filter((s) => s !== framework.value),
    }));
  }, []);
  // console.log("Postinput: ", postInputs);
  // console.log("Postinput type-->", postInputs.type);
  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      const input = inputRef.current;
      if (input) {
        if (e.key === "Delete" || e.key === "Backspace") {
          if (input.value === "") {
            setPostInputs((prev) => {
              const newSelected = [...prev.type];
              newSelected.pop();
              return {
                ...prev,
                type: newSelected,
              };
            });
          }
        }
        // This is not a default behavior of the <input /> field
        if (e.key === "Escape") {
          input.blur();
        }
      }
    },
    []
  );
  const selectables = FRAMEWORKS.filter(
    (framework) => !postInputs.type.includes(framework.value)
  );

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
      if (formType === "create") {
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
      }

      if (formType === "update") {
        const response = await axios.put(
          `http://localhost:8000/update-movie/${data.id}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log(response);
      }

      await getMovies();
      setIsOpen(false);
      router.refresh();
    } catch (error) {
      console.error("Error uploading movie:", error);
    }
  };

  return (
    <div className="">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger className="bg-blue-800 p-3 rounded-xl">
          {formType}
        </DialogTrigger>
        <DialogContent className="w-[70vw] bg-gray-900 text-white">
          <DialogHeader>
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
                        {postInputs.type.map((typeValue) => {
                          const framework = FRAMEWORKS.find(
                            (f) => f.value === typeValue
                          );
                          return (
                            <Badge key={typeValue} variant="secondary">
                              {framework?.label}
                              <button
                                className="ml-1 rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2"
                                onKeyDown={(e) => {
                                  if (e.key === "Enter") {
                                    handleUnselect(framework as Framework);
                                  }
                                }}
                                onMouseDown={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                }}
                                onClick={() =>
                                  handleUnselect(framework as Framework)
                                }
                              >
                                <X className="h-3 w-3 text-muted-foreground hover:text-foreground" />
                              </button>
                            </Badge>
                          );
                        })}
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
                                    onSelect={() => {
                                      setInputValue("");
                                      setPostInputs((prev) => ({
                                        ...prev,
                                        type: [...prev.type, framework.value],
                                      }));
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
                  className="  rounded-xl bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-5 py-2.5 me-2 mb-2  "
                  type="submit"
                >
                  Upload
                </button>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DemoForm;
