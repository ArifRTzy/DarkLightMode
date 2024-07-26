import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useTheme } from "../../../ThemeContext";
import { FaToggleOff } from "react-icons/fa6"
import { FaToggleOn } from "react-icons/fa6"

const Hero = () => {
    const { theme, toggleTheme } = useTheme();
  return (
    <section className="bg-gray-100 dark:bg-slate-800 py-16 px-8 md:py-40 md:px-52 flex flex-col gap-8 items-center">
      <div className="flex flex-col gap-4 text-center justify-center items-center">
        <h1 className="text-4xl dark:text-white md:text-5xl lg:text-6xl font-bold mb-4 w-full text-slate-800">
          Aku Sigma Pria Pemberani Rare Item 0.0000.1%🥶🥵👹👺
        </h1>
        <p className="text-xl dark:text-white md:text-2xl lg:text-3xl font-semibold text-slate-800">
          Just Human
        </p>
        <p className="text-md dark:text-white md:text-lg lg:text-xl text-slate-500 px-0 md:px-20">
          Coffee, Code , Dopamine.
        </p>
        <button className="border-[3px] dark:border-white dark:text-white border-slate-800 text-slate-800 font-medium py-2 px-8 rounded-lg w-fit flex gap-2 items-center justify-center hover:scale-110 transition-all">
          Let's Talk
          {/* <IoIosArrowDropright size={25} color="black" /> */}
        </button>
      </div>
      <div className="flex gap-3">
        <a href="https://github.com/ArifRTzy" target="_blank">
          <FaGithub size={35} className="hover:scale-110 transition-all dark:text-white" />
        </a>
        <a
          href="https://www.linkedin.com/in/arif-ramadhani-194282293"
          target="_blank"
        >
          <FaLinkedin size={35} className="hover:scale-110 transition-all dark:text-white" />
        </a>
      </div>
      <div
        className={` flex items-center justify-center ${
          theme === "dark" ? "text-black" : "text-white"
        }`}
      >
        <button
          className={`text-6xl text-white ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
          onClick={toggleTheme}
        >
          {theme === "dark" ? <FaToggleOn  /> : <FaToggleOff className="fill-black"/>}
        </button>
      </div>
    </section>
  );
};

export default Hero;
