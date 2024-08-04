import React from "react";
import "./MyProfileCard";
import MyProfileCard from "./MyProfileCard";
import "./ProjectInfo";
import ProjectInfo from "./ProjectInfo";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { SiPeerlist } from "react-icons/si";

function Footer() {
  const footerNavs = [
    {
      label: "Resources",
      items: [
        {
          href: "https://github.com/sailingsam/house_arena_react-vite",
          name: "Github",
        },
      ],
    },
    {
      label: "Scaler Resources",
      items: [
        {
          href: "https://www.interviewbit.com",
          name: "InterviewBit",
        },
        {
          href: "https://www.scaler.com",
          name: "Scaler",
        },
        {
          href: "https://www.scaler.com/school-of-technology/",
          name: "Scaler School of Technology",
        },
        {
          href: "https://www.scaler.com/school-of-business/",
          name: "Scaler School of Business",
        },
      ],
    },
  ];

  return (
    <footer className="pt-5 bg-black">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 flex-col">
        <div className="max-w-2xl">
          <h3 className="text-gray-300 text-2xl font-bold">
            If you find any issues, please contact the{" "}
            <a
              className="text-blue-400 text-2xl font-bold underline"
              href="mailto:jainsaksham1004@gmail.com"
              _target="blank"
            >
              {" "}
              developer here.
            </a>
          </h3>
        </div>
        <div className="flex-1 space-y-6 justify-between sm:flex md:space-y-0">
          <ProjectInfo />
          {footerNavs.map((item, idx) => (
            <ul className="space-y-2 text-gray-300 mx-1" key={idx}>
              <h4 className="text-gray-200 font-semibold mt-10 sm:pb-2">
                {item.label}
              </h4>
              {item.items.map((el, idx) => (
                <li key={idx}>
                  <a
                    href={el.href}
                    className="duration-150 hover:text-gray-400 text-sm"
                  >
                    {el.name}
                  </a>
                </li>
              ))}
            </ul>
          ))}
          <MyProfileCard />
        </div>
        <div className="py-5 border-t border-gray-700 items-center justify-center sm:flex">
          <p className="text-gray-300">Connect with me:</p>
          <div className="flex items-center gap-x-6 text-gray-400 ml-3">
            <a href="https://www.linkedin.com/in/sailingsam" target="_blank">
              <IoLogoLinkedin className="w-6 h-6 hover:text-gray-500 duration-150" />
            </a>
            <a href="https://peerlist.io/sailingsam" target="_blank">
              <SiPeerlist className="w-6 h-6 hover:text-gray-500 duration-150" />
            </a>
            <a href="https://x.com/jainsaksham1004" target="_blank">
              <FaSquareXTwitter className="w-6 h-6 hover:text-gray-500 duration-150" />
            </a>
            <a href="https://github.com/sailingsam" target="_blank">
              <FaGithub className="w-6 h-6 hover:text-gray-500 duration-150" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
