import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

export const Sociallinks = () => {
  const links = [
    {
      id: 1,
      href: "https://github.com/satyapsr13",
      style: "rounded-tr-md",
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
    },
    {
      id: 2,
      href: "https://www.linkedin.com/in/satyapsr13/",
      style: "rounded-tr-md",
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
    },
    {
      id: 3,
      href: "mailto:-satyapsr13@gmail.com",
      style: "rounded-tr-md",
      child: (
        <>
          Gmail <HiOutlineMail size={30} />
        </>
      ),
    },
    {
      id: 4,
      href: "https://satyapsr13.github.io/satyapsr13/images/Satya-Prakash_CV.pdf",
      style: "rounded-tr-md",
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
    },
  ];
  return (
    <div className="flex flex-col top-[35%]  left-0 fixed ">
      <ul>
        {links.map(({ id, child, href, style }) => (
          <li
            key={id}
            className=" hidden  lg:flex justify-between items-center w-40 h-14 ml-[-100px] hover:ml-0 px-4 bg-gray-500 rounded-tr-md rounded-br-md duration-200 "
          >
            <a
              href={href}
              className={
                "flex justify-between items-center w-full  text-white" +
                " " +
                style
              }
              target="_blank"
              rel="noreferrer"
            >
              {/* LinkedIn <FaLinkedin size={30} /> */}
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
