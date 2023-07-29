import React from "react";
import HeroImage from "../assets/heroImage.jpeg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-screen justify-between items-center bg-gradient-to-b from-black to-gray-800 mx-auto px-4"
    >
      <div className="mx-w-screen-lg mx-auto  flex md:flex-row flex-col items-center justify-center h-full ">
        <div className="flex flex-col h-full justify-center items-start    mx-auto ">
          <h2 className="text-4xl sm:text-7xl font-bold   text-white">
            I'm a Satya Prakash
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Enthusiastic Full Stack App Developer 👨‍💻 , eager to contribute to
            team success through hard work, attention to detail, and excellent
            organizational skills, a good understanding of frontend, backend,
            and project management.
          </p>
          <div className=" group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer ">
            <button>Portfolio</button>
            <span className="group-hover:rotate-90 duration-300" >
              <MdOutlineKeyboardArrowRight />
            </span>
          </div>
        </div>
        <div className="">
          <img
            src={HeroImage}
            className="rounded-3xl mx-auto md:w-2/3 w-full "
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
