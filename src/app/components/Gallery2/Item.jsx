import { useContext } from 'react';
import { MdPreview,MdAdsClick } from 'react-icons/md';
import { BsTrashFill } from 'react-icons/bs';

import { ImageGalleryContext } from '@/app/utils/GalleryContext';
import LazyImage from './LadyLoadImage';


const Item = ( props ) => {
    
    
    const {index,id,selected, image_url_path,selectImage} = props;
    const { toggleItem,handleSingleDelete } = useContext(ImageGalleryContext);
 

    return (<div className={`bg-white relative rounded-xl m-1`}>
    {
        <div className={`absolute hover:opacity-80 h-full w-full bg-slate-500 hover:bg-yellow-300 z-10 ${selected ? 'opacity-90' : 'opacity-0'} rounded-xl`}
        onClick={() => selectImage(index)}
        >
            
            <div className='w-full absolute flex justify-between p-2'>
                <input
                    type="checkbox"
                    name=""
                    id=""
                    className="h-6 w-6 rounded-lg border-2 accent-yellow-800 bg-red-800"
                    checked={selected}
                    onClick={(e) => {
                        toggleItem(e,id)
                    }}
                    onChange={(e) => e.stopPropagation()}
                />
                <span className='text-2xl text-red-500 hover:text-black'>
                    <button onClick={(e) => handleSingleDelete(e,id)}><BsTrashFill/></button>
                </span>
            </div>
             
             <span onClick={() => selectImage(index)}><p className="absolute text-black text-2xl transition hover:text-3xl w-auto h-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-100 z-20 p-4 cursor-pointer"><MdAdsClick/></p></span>

             
             
        </div>
    }
   
    {/* <img src={image_url_path} alt="" className="rounded-xl object-cover aspect-square z-0"/> */
        <LazyImage src={image_url_path}/>
    }
  </div>)
}

export default Item;
