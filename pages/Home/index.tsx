import { NextPage } from "next";
import Image from "next/image";
import React from "react";
import ValorantName from "../../_assets/img/valorant-name.svg";
import FadeBg from "../../_assets/img/fade-bg.png";
import {
  RiLinkedinBoxFill,
  RiInstagramFill,
  RiGithubFill,
} from "react-icons/ri";
import { Button } from "../../components/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { Titles } from "../../components/titlesComponent";
import Agents from "../../_assets/img/AgentsImg.png";
import Fireball from "../../_assets/img/fireball.png";
import Kunai from "../../_assets/img/kunai.png";
import allAgents from "../../_assets/img/allAgents.png";
import map from "../../_assets/img/map.png";

const HomePage: NextPage = () => {
  return (
    <>
      <section className="home-img bg-center bg-cover h-screen">
        <div className="grid mx-auto pt-12 h-screen md:h-[90%] grid-cols-12 md:flex">
          <motion.div
            className="pl-32 md:p-0 md:mx-8 text-[#FFFFFF] mr-auto col-span-7 self-center md:items-center lg:items-start md:text-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl pb-4 md:text-3xl">
              Hello player,
              <br /> Welcome to Gaido
            </h2>

            <Image
              className="max-w-[200px]"
              src={ValorantName}
              alt="Valorant"
            ></Image>

            <h3 className="max-w-[550px] mt-8 md:mt-5 mb-16 leading-5 lg:text-sm font-SansPro text-lg">
              A simple unofficial guide to valorant where you will find
              information about weapons, agents, maps and their in-game stats,
              learn more about the project by clicking the buttons below.
            </h3>
            <Button link="/" title="ABOUT PROJECT" />
            <div className="flex items-center mt-14 md:justify-center">
              <div className="w-36 h-1 md:w-12 sm:h-[2px] bg-pink"></div>
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
              <div className="w-20 h-1 xl:w-12 sm:h-[2px] bg-pink"></div>
            </div>
          </motion.div>
          <motion.div
            className="col-span-5 max-w-[440px] md:hidden self-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <Image src={FadeBg} alt="Fade Agent"></Image>
          </motion.div>
        </div>
      </section>

      {/* -- AGENTS SECTION -- */}

      <section className="bg-gray">
        <div>
          <div className="grid grid-cols-2 xl:grid-cols-1 xl:justify-items-center xl:h-auto h-screen">
            <div className="pt-32 pl-32 xl:pl-0 xl:items-start xl:text-center xl:mx-8 text-gray-dark">
              <Titles
                title="THE AGENTS"
                subtitle="PUT DOWN THE SPIKE"
                description="More than weapons and ammo, VALORANT includes agents with adaptive, fast, and lethal abilities that create opportunities for you to show off your shooting mechanics. Each Operator is unique, as are the highlights of each match!"
              />
              <Button link="/Agents" title="SEE THE AGENTS" />
            </div>
            <div className="flex xl:hidden">
              <motion.div
                className="w-[200px] pt-44 right-[495px] absolute "
                animate={{ y: [15, -15] }}
                transition={{ yoyo: Infinity, ease: "easeOut", duration: 3 }}
              >
                <Image src={Fireball} alt="Fireball"></Image>
              </motion.div>
              <motion.div
                className="w-[100px] pt-44 right-[210px] absolute"
                animate={{ y: [15, -15] }}
                transition={{
                  yoyo: Infinity,
                  duration: 3,
                }}
              >
                <Image src={Kunai} alt="Jett Knife"></Image>
              </motion.div>
              <motion.div className="max-w-[550px] max-h[647px] pt-20 absolute right-36">
                <Image src={Agents} alt="Jett and Phoenix"></Image>
              </motion.div>
            </div>
            <div className="hidden xl:inline mx-4 mt-8 mb-16">
              <Image src={allAgents} alt="Valorant Agents"></Image>
            </div>
          </div>
        </div>
      </section>

      {/* -- WEAPONS SECTION -- */}

      <section className="weapons-bg bg-center bg-cover h-screen ">
        <div className="pt-32 pl-32 flex xl:justify-center xl:pl-0 xl:items-start xl:text-center xl:mx-8">
          <div className="text-[#FFFFFF] lg:justify-center">
            <Titles
              title="WEAPONS"
              subtitle="PHANTOM OR VANDAL?"
              description="Guns are arguably the most important aspect of the game, so how do you choose which gun best suits you, your play style, and the situation? This guide will break down each gun as well as their pros and cons to help make your decision easier."
            />
            <Button link="/Weapons" title="SEE ALL WEAPONS" className="mb-2" />
          </div>
        </div>
      </section>

      {/* -- MAP SECTION -- */}

      <section className="bg-gray">
        <div className="flex h-screen xl:flex-col xl:h-auto">
          <div className="pt-32 pl-32 text-gray-darker xl:flex xl:flex-col xl:justify-center xl:pl-0 xl:items-center xl:text-center xl:mx-8">
            <Titles
              title="MAPS"
              subtitle="HIGH QUAITY DESIGN MAPS"
              description="Each map serves as a stage to showcase your creativity. Maps are tailored for team strategies, spectacular feats and thrilling moments. Do the actions that everyone will try to imitate in the future!"
            />
            <Button link="/" title="CHECK THE MAPS" />
          </div>
          <div className="flex self-end  xl:justify-center">
            <Image src={map} alt="Map" />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
