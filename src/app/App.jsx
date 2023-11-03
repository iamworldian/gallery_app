import { FC, useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';

import { imageList } from "@/app/utils/data";
import { ImageGalleryContext } from "@/app/utils/GalleryContext";


import 'react-toastify/dist/ReactToastify.css';
import ToggleTheme from "@/app/components/ToggleTheme";
import Header from "./components/Header";
import Gallery from "@/app/components/Gallery2/Gallery";


const App = () => {
  const [galleryItems , setGalleryItems] = useState(imageList);
  const [isDarkTheme , setIsDarkTheme] = useState(false);
  const [toDelete , setToDelete] = useState(0);


  useEffect(() => {
    // maintain count of selected Items
    setToDelete(galleryItems.reduce((acc,curr) => acc + (curr.selected ? 1 : 0) , 0));
  }, [toDelete,galleryItems]);

  // handle delete items event
  function handleDelete(){
    const newItems = galleryItems.filter(item => item.selected != true);
    setGalleryItems(newItems);
    toast('Images Deleted');
  }

  // toggle item check / uncheck
  function toggleItem(id){
    const newItems = galleryItems.map((item) => {
      if(item.id === id){
        return {...item, selected: !item.selected };
      }else return item;
    });
    setGalleryItems(newItems);
  }



  const galleryContextValue = {
    galleryItems, setGalleryItems,
    isDarkTheme, setIsDarkTheme,
    toDelete , setToDelete,
    handleDelete,
    toggleItem,
    handleDelete

  }

  



  return (
    <ImageGalleryContext.Provider value={galleryContextValue}>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={isDarkTheme ? 'colored' : 'dark'}
      />
      <div className={`${isDarkTheme ? 'bg-slate-800 text-white' : 'bg-white text-black' }`}>
      <ToggleTheme/>
      </div>
      <div className={`flex flex-col w-full relative h-auto min-h-screen flex items-center justify-start ${isDarkTheme ? 'bg-slate-800 text-white' : 'bg-white text-black' }`}>
      
        <div className={`h-auto w-5/6 rounded-xl flex flex-col items-center justify-center ${isDarkTheme ? 'bg-slate-700' : 'bg-slate-100/50 border-4 border-slate-400' } m-8`}>
          <Header/>
          <div className="w-3/4">
            <Gallery/>
          </div>
        </div>
      </div>
    </ImageGalleryContext.Provider>
  );
};

export default App;
