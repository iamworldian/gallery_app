import { useContext } from 'react';
import { MdPreview } from 'react-icons/md';

import { ImageGalleryContext } from '@/app/utils/GalleryContext';


const Item = ( props ) => {
    
    
    const {index,id,selected, image_url_path,selectImage} = props;
    const { toggleItem } = useContext(ImageGalleryContext);
 

    return (<div className={`bg-white relative rounded-xl m-1`}>
    {
        <div className={`absolute hover:opacity-80 h-full w-full bg-slate-500 hover:bg-yellow-600 z-10 ${selected ? 'opacity-90' : 'opacity-0'} rounded-xl`}
        onClick={() => selectImage(index)}
        >
            <input
                type="checkbox"
                name=""
                id=""
                className="absolute top-0 left-0 m-4 h-6 w-6 rounded-lg border-2 border-blue-500 accent-yellow-200 bg-red-600"
                checked={selected}
                onClick={(e) => {toggleItem(e,id)}}
            />
             
             <span onClick={() => selectImage(index)}><p className="absolute text-white text-xl hover:text-black w-auto h-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-100 z-20">Click</p></span>
             
        </div>
    }
   
    <img src={image_url_path} alt="" className="rounded-xl object-cover aspect-square z-0"/>
  </div>)
}

export default Item;
