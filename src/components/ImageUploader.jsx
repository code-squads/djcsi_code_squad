import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";

const ImageUploader = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <div>
      <div className="relative w-64 h-64">
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
            className="w-full h-full border-2 border-dashed border-gray-400 rounded-lg flex justify-center items-center cursor-pointer"
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
      <div>
        {image ? (
          <div>hey</div>
        ) : (
          <div>
            <div>
              
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUploader;
