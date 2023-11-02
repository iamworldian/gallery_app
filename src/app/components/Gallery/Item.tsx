import { forwardRef, CSSProperties, useContext } from 'react';
import { ImageGalleryContext } from '@/app/utils/GalleryContext';


const Item = forwardRef(({style,item,index ,...props }, ref) => {
    
    
    const {id,selected, image_url_path} = item;
    const { toggleItem } = useContext(ImageGalleryContext);

    const inlineStyles: CSSProperties = {
        ...style,
    };

    return (<div ref={ref} className={`bg-white relative w-auto ${index === 0 ? 'row-span-2 col-span-2 border-4 border-dotted': 'border-2 border-slate-600'} rounded-3xl `} {...props}>
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
    <img src={image_url_path} alt="" className="z-1 rounded-3xl"/>
  </div>)
});

export default Item;
