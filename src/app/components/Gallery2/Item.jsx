import { useContext } from 'react';
import { ImageGalleryContext } from '@/app/utils/GalleryContext';


const Item = ( props ) => {
    
    
    const {index,id,selected, image_url_path} = props;
    const { toggleItem } = useContext(ImageGalleryContext);
 

    return (<div className={`bg-white relative rounded-xl m-1`}>
    {
        <div className={`absolute hover:opacity-50 h-full w-full bg-slate-700/80 z-10 ${selected ? 'opacity-80' : 'opacity-0'} rounded-xl`}
        onClick={() => {toggleItem(id)}}
        >
            <input
                type="checkbox"
                name=""
                id=""
                className="m-4 h-6 w-6 rounded-lg border-2 border-blue-500 accent-yellow-200 "
                checked={selected}
                
            />
        </div>
    }
    <img src={image_url_path} alt="" className="rounded-xl object-cover aspect-square z-0"/>
  </div>)
}

export default Item;
