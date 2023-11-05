import { useContext } from "react";
import { MdDarkMode } from "react-icons/md";
import { BsFillSunFill } from "react-icons/bs";

import { toast } from "react-toastify";
import { ImageGalleryContext } from "@/app/utils/GalleryContext";

const ToggleTheme = () => {
  const { isDarkTheme, setIsDarkTheme } = useContext(ImageGalleryContext);

  const toggleThemeMode = () => {
    setIsDarkTheme(!isDarkTheme);
    toast(`${isDarkTheme ? "Light" : "Dark"} Theme Enabled`);
  };

  return (
    <div
      className={`md:lg:left-0 sm:top-0 flex align-bottom ${
        isDarkTheme ? "text-white" : "text-black"
      }`}
    onClick={ToggleTheme}
    >
      { isDarkTheme ? <button onClick={toggleThemeMode}><BsFillSunFill className="m-4 text-xl" /></button> :
      <button onClick={toggleThemeMode}><MdDarkMode className="m-4 text-xl" /></button>
      }
    </div>
  );
};

export default ToggleTheme;
