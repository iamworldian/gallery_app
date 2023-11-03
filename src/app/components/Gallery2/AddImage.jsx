import React from "react";
import { ImImage } from "react-icons/im";

function AddImage({ handleUploadImage }) {

    
  return (
    <label className="justify-center flex flex-col m-4">
      <input
        type="file"
        accept="image/*"
        onChange={handleUploadImage}
        className="hidden"
      />
      <div className="md:flex flex-col items-center">
        <ImImage className="text-4xl" />
        <span className="text-sm mt-2">Add Images</span>
      </div>
    </label>
  );
}

export default AddImage;