import { NextPage } from "next";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import valorantSmLogo from "../../_assets/img/valorant-logo.svg";
import { motion } from "framer-motion";

export const Header: NextPage = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("black");

  const handleNav: any = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#1e1e1e");
        setTextColor("#ffffff");
      } else {
        setColor("transparent");
        setTextColor("#ffffff");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);
  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <div className="mx-6 flex md:justify-between justify-evenly items-center p-2">
        <Link href="/">
          <a className="w-[50px] h-[41px] p-1">
            <Image src={valorantSmLogo}></Image>
          </a>
        </Link>
        <ul className="md:hidden flex text-sm text-white">
          <motion.li className="p-4 hover:text-pink" whileTap={{ scale: 0.8 }}>
            <Link href="/">HOME</Link>
          </motion.li>
          <motion.li className="p-4 hover:text-pink" whileTap={{ scale: 0.8 }}>
            <Link href="/Agents">
              <a href="/Agents">AGENTS</a>
            </Link>
          </motion.li>
          <motion.li className="p-4 hover:text-pink" whileTap={{ scale: 0.8 }}>
            <Link href="/">WEAPONS</Link>
          </motion.li>
          <motion.li className="p-4 hover:text-pink" whileTap={{ scale: 0.8 }}>
            <Link href="/">MAPS</Link>
          </motion.li>
        </ul>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="py-2 px-8 text-white bg-pink rounded-lg text-sm font-medium md:hidden flex"
        >
          DOWNLOAD
        </motion.button>
        {/* Mobile Button*/}
        <motion.div
          onClick={handleNav}
          className="md:block hidden z-10"
          whileTap={{ scale: 0.7 }}
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
              ? "hidden absolute top-0 left-0 right-0 bottom-0 md:flex justify-center items-center w-full h-screen bg-black-dark text-center text-white ease-in duration-300"
              : "hidden absolute top-0 left-[-100%] right-0 bottom-0 md:flex justify-center items-center w-full h-screen bg-black-dark text-center text-white ease-in duration-300"
          }
        >
          <ul>
            <li className="p-4 text-3xl hover:text-gray-300">
              <Link href="/">
                <a href="/">HOME</a>
              </Link>
            </li>
            <li className="p-4 text-3xl hover:text-gray-300">
              <Link href="/agents">
                <a href="/agents">AGENTS</a>
              </Link>
            </li>
            <li className="p-4 text-3xl hover:text-gray-300">
              <Link href="/">
                <a>WEAPONS</a>
              </Link>
            </li>
            <li className="p-4 text-3xl hover:text-gray-300">
              <Link href="/">
                <a>MAPS</a>
              </Link>
            </li>
            <motion.button className="py-2 px-8 mt-3 text-white bg-pink rounded-lg text-sm font-medium">
              DOWNLOAD
            </motion.button>
          </ul>
        </div>
      </div>
    </div>
  );
};
