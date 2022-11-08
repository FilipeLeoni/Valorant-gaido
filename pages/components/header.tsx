import { NextPage } from "next";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import valorantSmLogo from "../../_assets/img/valorant-logo.svg";
import { motion } from "framer-motion";
import classnames from "clsx";

export const Header: NextPage = () => {
  const [nav, setNav] = useState(false);
  const [scrollY, setScrollY] = useState<number>(0);

  const handleNav: any = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={classnames(
        "fixed",
        "left-0",
        "top-0",
        "w-full",
        "z-20",
        "ease-in",
        "duration-300",
        {
          "bg-gray-darker": scrollY >= 90,
          "bg-transparent": scrollY < 90,
        }
      )}
    >
      <div className="mx-6 flex md:justify-between justify-evenly items-center p-2">
        <Link href="/">
          <a className="w-[50px] h-[41px] p-1">
            <Image src={valorantSmLogo}></Image>
          </a>
        </Link>
        <ul className="md:hidden flex text-sm text-white">
          <li className="p-4 ">
            <Link href="/">
              <a className="hover:text-pink hover:ease-in-out hover:duration-200">
                HOME
              </a>
            </Link>
          </li>
          <li className="p-4 ">
            <Link href="/Agents">
              <a className="hover:text-pink hover:ease-in-out hover:duration-200">
                AGENTS
              </a>
            </Link>
          </li>
          <li className="p-4 ">
            <Link href="/">
              <a className="hover:text-pink hover:ease-in-out hover:duration-200">
                WEAPONS
              </a>
            </Link>
          </li>
          <li className="p-4">
            <Link href="/">
              <a className="hover:text-pink hover:ease-in-out hover:duration-200">
                MAPS
              </a>
            </Link>
          </li>
        </ul>
        <button className="py-2 px-8 text-white bg-pink rounded-lg text-sm font-medium md:hidden flex">
          DOWNLOAD
        </button>
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
            <button className="py-2 px-8 mt-3 text-white bg-pink rounded-lg text-sm font-medium">
              DOWNLOAD
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};
