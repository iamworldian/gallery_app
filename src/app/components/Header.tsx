
import { useContext, useEffect } from "react";
import { BsImages } from 'react-icons/bs';

import { ImageGalleryContext } from "@/app/utils/GalleryContext";

const Header = () => {
  const {toDelete , handleDelete, isDarkTheme } = useContext(ImageGalleryContext);

  

  return (
    <div className={`w-full h-full flex border-b-4 p-4 border-slate-400 justify-between ${isDarkTheme ? 'border-slate-400' : ''}`}>
        
        {
          toDelete > 0 ? 
          <div className="flex items-center text-xl font-bold">
            
            <p className="font-bold"><input type="checkbox" className="accent-yellow-200" checked/> {toDelete}  Items Selected</p>
          </div>: 
          <h1 className="flex items-center text-xl font-bold">  Gallery <span className="ml-2"><BsImages/> </span></h1>
        }

        {
          toDelete > 0 && <button className={`${isDarkTheme ? 'text-red-500' : 'text-red-500'} font-bold hover:bg-slate-200  px-2 rounded-xl`}
          onClick={handleDelete}
          > Delete Selected </button>
        }
      </div>
  )
}

export default Header