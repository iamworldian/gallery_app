import { useContext } from 'react';
import { ImageGalleryContext } from '@/app/utils/GalleryContext';


const Item = ( props ) => {
    
    
    const {index,id,selected, image_url_path} = props;
    const { toggleItem } = useContext(ImageGalleryContext);
 console.log(index,id,selected,image_url_path);
   

    return (<div className={`bg-white relative rounded-3xl`}>
    {
        <div className={`absolute hover:opacity-90 h-full w-full bg-slate-300/80 z-10 ${selected ? '' : 'opacity-0'} rounded-3xl`}>
            <input
                type="checkbox"
                name=""
                id=""
                className="m-4 h-4 w-4 rounded-sm border-2 border-blue-500 accent-yellow-200"
                checked={selected}
                onChange={() => {toggleItem(id)}}
            />
        </div>
    }
    <img src={image_url_path} alt="" className="rounded-3xl object-contain"/>
  </div>)
}

export default Item;
