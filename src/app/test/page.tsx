"use client";
import axios from "axios";
import React, { useState } from "react";

const page = () => {
  const [selectedPosterFile, setSelectedPosterFile] = useState("");
  const [selectedBackgroundImageFile, setSelectedBackgroundImageFile] =
    useState("");

  // try {
  // const response = await axios.post(
  //   "http://localhost:8000/test",
  //   formData,
  //   {
  //     headers: {
  //       "Content-Type": "multipart/form-data",
  //     },
  //   }
  // );

  //   console.log("Image upload response:", response.data);
  // } catch (error) {
  //   console.error("Error uploading image:", error);
  // }
  // };
  const handleSubmit = () => {};

  const handleImagePoster = (e) => {
    // selectedBackgroundImageFile(e.target.files[0]);
  };
  const handleImage = (e) => {
    setSelectedPosterFile(e.target.files[0]);
  };
  console.log(selectedPosterFile);
  console.log(selectedBackgroundImageFile);
  return (
    <div>
      <input type="file" name="poster" onChange={handleImage} />
      <input type="file" name="backgroundImage" onChange={handleImagePoster} />
      <button onClick={handleSubmit}>submit</button>
    </div>
  );
};

export default page;
