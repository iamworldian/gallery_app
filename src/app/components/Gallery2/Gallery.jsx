import SortableList, { SortableItem } from 'react-easy-sort'
import arrayMove  from 'array-move'
import { useState,useContext } from 'react'
import { toast } from "react-toastify";



import { ImageGalleryContext } from '@/app/utils/GalleryContext'
import Preview from '@/app/components/Gallery2/Preview';
import Item from './Item'


import AddImage from './AddImage'

export default function Gallery () {
  const { galleryItems, setGalleryItems } = useContext(ImageGalleryContext);

  
  const handleUploadImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const newImage = {
        id: galleryItems.length + 1,
        image_url_path: URL.createObjectURL(file),
        selected: false,
      };
      setGalleryItems([...galleryItems, newImage]);
    }

    toast(`Image Added`);
  };

  const onSortEnd = (oldIndex, newIndex) => {
    setGalleryItems((array) => arrayMove(array, oldIndex, newIndex))
  }

  // Preview Image
  const [visible, setVisible] = useState(false);
  const [index, setIndex] = useState(0);

  const selectImage = (idx) => {
    console.log(idx);
    setVisible(true);
    setIndex(idx);
  };

  return (
    <SortableList onSortEnd={onSortEnd} className="grid grid-cols-1 lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 gap-3 m-6" draggedItemClassName="dragged">
      {galleryItems.map((item,index) => (
        <SortableItem key={item.id}>
          <div className={`cursor-move ${index === 0 ? 'row-span-1 col-span-1 sm:row-span-2 sm:col-span-2 border-4 border-yellow-500 border-dashed': 'border-2 border-slate-400'} rounded-2xl`}>
            <Item {...item} index={index} selectImage={selectImage}/>
            
          </div>
        </SortableItem>
      ))}
      <Preview 
        images={galleryItems}
        visible={visible}
        setVisible={setVisible}
        index={index}
        setIndex={setIndex}
      />
       <AddImage handleUploadImage={handleUploadImage} />
    </SortableList>
  )
}
