import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import Loader from "./loader";

const ImageUploader = () => {
  const [image, setImage] = useState(null);
  const [value, setValue] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleImageChange = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };

  // if(loading){
  //   return <Loader></Loader>
  // }

  return (
    <div className="flex flex-col items-center">
      <div className="relative mt-4 w-64 h-64">
        <input
          type="file"
          className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
          onChange={handleImageChange}
        />
        {image ? (
              <img
                src={image}
                alt="Selected"
                className="w-full h-full object-cover"
              />
            
        ) : (
          <div
            className="w-full h-full border-2 border-dashed border-[#DBE3EE] dark:border-gray-400 bg-[#F6F9FC] dark:bg-[#1F232D] rounded-lg flex justify-center items-center cursor-pointer"
            onClick={() => document.getElementById("imageUpload").click()}
          >
            <FontAwesomeIcon
              icon={faImage}
              size="3x"
              className="text-gray-400"
            />
          </div>
        )}
      </div>
      <div className="mt-4">
        {image ? (
          <div>
            <div>
              {value ? (
                <div className=" border-2 border-dashed border-red-400 text-red-400 p-16 rounded-lg bg-[#F6F9FC] dark:bg-[#1F232D]">
                  The employee has been flaged by other employeers earlier !!!
                </div>
              ) : (
                <div className=" border-2 border-dashed border-green-500 text-green-500 p-16 rounded-lg bg-[#F6F9FC] dark:bg-[#1F232D] ">
                  Woah! the employee has no previous flags and is to be hired
                </div>
              )}
            </div>
          </div>
        ) : (
          <div>
            <div className=" border-2 border-dashed border-[#DBE3EE] dark:border-gray-400 p-16 rounded-lg bg-[#F6F9FC] dark:bg-[#1F232D] text-[#9BA3AF]">
              Upload an image to get the report about the employee
            </div>
          </div>
        )}
      </div>
      <button
        onClick={() => {
          setLoading(false);
          // console.log(value);
        }}
      >
        Change color
      </button>
    </div>
  );
};

export default ImageUploader;
