import {  useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';

import { imageList } from "@/app/utils/data";
import { ImageGalleryContext } from "@/app/utils/GalleryContext";
import ToggleTheme from "@/app/components/ToggleTheme";
import Header from "@/app/components/Header";
import Gallery from "@/app/components/Gallery2/Gallery";


import 'react-photo-view/dist/react-photo-view.css'
import 'react-toastify/dist/ReactToastify.css';
import 'react-loading-skeleton/dist/skeleton.css'

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
    console.log(newItems);
  }

  function handleSingleDelete(e,id) {
    console.log(galleryItems);
    const newItems = galleryItems.filter(item => item.id != id);
    setGalleryItems(newItems);
    console.log(newItems);
    toast('Single Image Deleted');
    e.stopPropagation();
  }

  // toggle item check / uncheck
  function toggleItem(e,id){
   
    const newItems = galleryItems.map((item) => {
      if(item.id === id){
        return {...item, selected: !item.selected };
      }else return item;
    });
    setGalleryItems(newItems);
    e.stopPropagation();
    
  }



  const galleryContextValue = {
    galleryItems, setGalleryItems,
    isDarkTheme, setIsDarkTheme,
    toDelete , setToDelete,
    handleDelete,
    toggleItem,
    handleSingleDelete

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
      <div className={`flex flex-col w-full relative h-auto min-h-screen items-center justify-start ${isDarkTheme ? 'bg-slate-800 text-white' : 'bg-white text-black' }`}>
      
        <div className={`h-auto w-5/6 rounded-xl flex flex-col items-center justify-center ${isDarkTheme ? 'bg-slate-700 border-4 border-slate-500' : 'bg-slate-100/50 border-4 border-slate-400' } m-8`}>
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
