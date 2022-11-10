import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import riot from "../../_assets/img/riot-logo.svg";
import { motion } from "framer-motion";
import {
  RiLinkedinBoxFill,
  RiInstagramFill,
  RiGithubFill,
} from "react-icons/ri";

export const Footer: NextPage = () => {
  return (
    <div className="bg-blue w-100% h-64 flex flex-col justify-center items-center">
      <div>
        <p className="text-gray text-center leading-5">
          Attention: This is a fake Valorant game website and is only a personal
          project.
          <br /> I do not have any business with Riot Games.
        </p>
      </div>
      <div className="items-center flex my-2 w-[130px] h-[87px] cursor-pointer ">
        <Link href="https://www.riotgames.com/pt-br">
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://www.riotgames.com/pt-br"
          >
            <Image src={riot} alt="Riot Logo" />
          </motion.a>
        </Link>
      </div>
      <div>
        <div className="text-pink flex text-2xl">
          <Link href="https://www.linkedin.com/in/filipe-leoni-5745551a8/">
            <motion.a
              whileHover={{ scale: 1.4 }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
              whileTap={{ scale: 0.8 }}
              href="https://www.linkedin.com/in/filipe-leoni-5745551a8/"
              className="mx-5 cursor-pointer"
            >
              <RiLinkedinBoxFill />
            </motion.a>
          </Link>
          <Link href="https://www.instagram.com/filipeleoni/">
            <motion.a
              whileHover={{ scale: 1.4 }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
              whileTap={{ scale: 0.8 }}
              href="https://www.instagram.com/filipeleoni/"
              className="mr-5 cursor-pointer"
            >
              <RiInstagramFill />
            </motion.a>
          </Link>
          <Link href="https://github.com/FilipeLeoni">
            <motion.a
              whileHover={{ scale: 1.4 }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
              whileTap={{ scale: 0.8 }}
              href="https://github.com/FilipeLeoni"
              className="mr-5 cursor-pointer"
            >
              <RiGithubFill />
            </motion.a>
          </Link>
        </div>
      </div>
    </div>
  );
};
