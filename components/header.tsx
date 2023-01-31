import { NextPage } from "next";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { RiDownloadFill } from "react-icons/ri";

import valorantSmLogo from "../_assets/img/valorant-logo.svg";
import { motion } from "framer-motion";
import classnames from "clsx";

export const Header: NextPage = () => {
  const [nav, setNav] = useState(false);

  const handleNav: any = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed left-0 top-0 w-full z-20 ease-in duration-300 bg-gray-darker/90">
      <div className="flex md:justify-between justify-evenly items-center p-1">
        <div className="w-[123px] h-[41px] lg:w-auto justify-center flex ">
          <Link href="/">
            <a className="w-[50px] h-[41px]">
              <Image src={valorantSmLogo} alt="Valorant Logo"></Image>
            </a>
          </Link>
        </div>
        <ul className="md:hidden flex text-gray font-SansPro">
          <li className="py-4">
            <Link href="/">
              <a className="p-3 m-2 hover:ease-in-out font-unbutu hover:text-pink cursor-pointer hover:border-b-2 border-pink hover:bg-gray/10 rounded">
                HOME
              </a>
            </Link>
          </li>
          <li className="py-4">
            <Link href="/Agents">
              <a className="p-3 m-2 hover:ease-in-out hover:text-pink cursor-pointer hover:border-b-2 border-pink hover:bg-gray/10 rounded">
                AGENTS
              </a>
            </Link>
          </li>
          <li className="py-4">
            <Link href="/Weapons">
              <a className="p-3 m-2 hover:ease-in-out hover:text-pink cursor-pointer hover:border-b-2 border-pink hover:bg-gray/10 rounded">
                WEAPONS
              </a>
            </Link>
          </li>
          <li className="py-4">
            <Link href="/Maps">
              <a className="p-3 m-2 hover:ease-in-out hover:text-pink cursor-pointer hover:border-b-2 border-pink hover:bg-gray/10 rounded">
                MAPS
              </a>
            </Link>
          </li>
          <li className="py-4">
            <Link href="/About">
              <a className="p-3 m-2 hover:ease-in-out hover:text-pink cursor-pointer hover:border-b-2 border-pink hover:bg-gray/10 rounded">
                ABOUT
              </a>
            </Link>
          </li>
          <li className="py-4">
            <Link href="/Ranks">
              <a className="p-3 m-2 hover:ease-in-out hover:text-pink cursor-pointer hover:border-b-2 border-pink hover:bg-gray/10 rounded">
                RANKS
              </a>
            </Link>
          </li>
        </ul>
        <Link href="https://playvalorant.com/pt-br/">
          <a className="cursor-pointer font-SansPro px-4 py-1 gap-2 bg-pink hover:text-white duration-200 ease-in-out text-gray-darker rounded-lg md:hidden flex items-center">
            <RiDownloadFill className="w-4 h-auto" />
            DOWNLOAD
          </a>
        </Link>
        {/* Mobile Button*/}
        <motion.div
          onClick={handleNav}
          className="md:block hidden z-10 p-2"
          whileTap={{ scale: 0.5 }}
        >
          {nav ? (
            <AiOutlineClose size={20} style={{ color: "#ffffff" }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: "#ffffff" }} />
          )}
        </motion.div>
        {/* Mobile Menu*/}
        <div
          className={
            nav
              ? "hidden absolute top-0 left-0 right-0 bottom-0 md:flex justify-center items-center w-full h-screen bg-gray-darker text-center text-white ease-in duration-300"
              : "hidden absolute top-0 left-[-100%] right-0 bottom-0 md:flex justify-center items-center w-full h-screen bg-gray-darker text-center text-white ease-in duration-300"
          }
        >
          <ul className="mb-80" onClick={() => setNav(!nav)}>
            <li className="p-4 text-2xl hover:text-pink">
              <Link href="/">HOME</Link>
            </li>
            <li className="p-4 text-2xl hover:text-pink">
              <Link href="/Agents">AGENTS</Link>
            </li>
            <li className="p-4 text-2xl hover:text-pink">
              <Link href="/Weapons">WEAPONS</Link>
            </li>
            <li className="p-4 text-2xl hover:text-pink">
              <Link href="/">MAPS</Link>
            </li>
            <button className="py-2 px-8 mt-3 text-white bg-pink rounded-lg text-sm font-medium">
              DOWNLOAD
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};
