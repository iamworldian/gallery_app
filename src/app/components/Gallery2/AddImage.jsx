import React from "react";
import { ImImage } from "react-icons/im";

function AddImage({ handleUploadImage }) {

    
  return (
    <label className="justify-center flex flex-col  border-2 border-slate-500 border-dashed rounded-lg bg-slate-400 p-6 hover:bg-slate-600">
      <input
        type="file"
        accept="image/*"
        onChange={handleUploadImage}
        className="hidden"
        multiple
      />
      <div className="md:flex flex-col items-center">
        <ImImage className="text-2xl" />
        <span className="text-sm mt-1">Add Images</span>
      </div>
    </label>
  );
}

export default AddImage;