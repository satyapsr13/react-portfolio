import React, { useState } from "react";

import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "contact",
    },
    {
      id: 3,
      link: "projects",
    },
    {
      id: 4,
      link: "About",
    },
    {
      id: 5,
      link: "Resume",
    },
  ];

  return (
    <div className="flex  justify-between items-center w-full h-20 text-white bg-black fixed px-4">
      <div>
        <h1 className="font-signature text-5xl  ">Satyapsr</h1>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 capitalize font-medium text-gray-500 hover:scale-105 duration-200"
          >
            {link}
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden "
      >
        {!nav ? <FaBars size={30} /> : <FaTimes size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center absolute items-center top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500  ">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 capitalize text-4xl py-6 font-medium text-gray-500 hover:scale-105 duration-200"
            >
              {link}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
