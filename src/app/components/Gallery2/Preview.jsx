import { PhotoProvider, PhotoSlider } from "react-photo-view";


export default function Preview({ images, visible, setVisible, index, setIndex }) {
  return (
    <PhotoProvider>
      <PhotoSlider
        images={images.map((item) => ({
          src: item.image_url_path,
          key: item.id,
        }))}
        visible={visible}
        onClose={() => setVisible(false)}
        index={index}
        onIndexChange={setIndex}
        maskOpacity={0.5}
        bannerVisible={true}
        speed={() => 800}
        easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}

      />
    </PhotoProvider>
  );
}
