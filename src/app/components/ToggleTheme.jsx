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
    >
      <BsFillSunFill className="m-4 text-xl" />

      <input
        className="mt-4 h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-500 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100  checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#fff] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-yellow-300 dark:checked:after:bg-yellow-500 dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#fff]"
        type="checkbox"
        role="switch"
        id="flexSwitchCheckDefault"
        onChange={toggleThemeMode}
      />

      <MdDarkMode className="m-4 text-xl" />
    </div>
  );
};

export default ToggleTheme;
