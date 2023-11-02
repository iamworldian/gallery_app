import { FC, useState, useContext } from "react";
import {
  DndContext,
  closestCenter,
  MouseSensor,
  TouchSensor,
  DragOverlay,
  useSensor,
  useSensors,
  DragStartEvent,
  DragEndEvent,
} from "@dnd-kit/core";
import { arrayMove, SortableContext } from "@dnd-kit/sortable";
import Grid from "./Grid";
import SortableItem from "./SortableItem";
import Item from "./Item";
import { ImageGalleryContext } from "@/app/utils/GalleryContext";

const Gallery: FC = () => {
  const { galleryItems, setGalleryItems } = useContext(ImageGalleryContext);

  const [activeItem, setActiveItem] = useState(-1);

  const sensors = useSensors(
    useSensor(MouseSensor, {
      // Require the mouse to move by 10 pixels before activating
      activationConstraint: {
        distance: 10,
      },
    }),
    useSensor(TouchSensor, {
      // Press delay of 250ms, with tolerance of 5px of movement
      activationConstraint: {
        delay: 250,
        tolerance: 5,
      },
    }),
  );

  const handleDragStart = (event: DragStartEvent) => {
    const { id } = event.active;
    const value = galleryItems.findIndex((item) => item.id === id);
    
    setActiveItem(value);
   
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    
    if (active.id !== over?.id) {
      const oldIndex = galleryItems.findIndex(item => item.id === active.id);
      const newIndex = galleryItems.findIndex(item => item.id === over?.id);
      setGalleryItems((items) => {
        return arrayMove(items, oldIndex, newIndex);
      });
    }
    setActiveItem(-3);
  };

  const handleDragCancel = () => {
    setActiveItem(-2);
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragCancel={handleDragCancel}
    >
      <SortableContext items={galleryItems}>
        <Grid>
          {galleryItems.map((item, index) => (
            <SortableItem item={item} key={item.id} index={index} />
          ))}
        </Grid>
      </SortableContext>
      <DragOverlay adjustScale={true}>
                {activeItem > 0 ? <Item item={galleryItems[activeItem]} /> : null}
      </DragOverlay>
    </DndContext>
  );
};

export default Gallery;
