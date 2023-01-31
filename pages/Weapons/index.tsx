import Image from "next/image";
import { NextPage } from "next";
import { Description } from "../../components/description";
import { Title } from "../../components/pageTitle";
import React, { useState, useEffect } from "react";
import { Menu } from "../../components/menu";
import { Weapon } from "../../entities/weapon";
import { motion } from "framer-motion";
import { getWeapons } from "../api/valorant-service";
import { WeaponsCard } from "../../components/weaponsCard";
import Head from "next/head";
const Weapons: NextPage = () => {
  const [weapons, setWeapons] = useState<Weapon[]>([]);
  useEffect(() => {
    (async () => {
      try {
        const weapons = await getWeapons();
        setWeapons(weapons);
      } catch (error) {
        console.log("Error trying to search for weapons");
      }
    })();
  }, []);
  return (
    <div className="h-auto w-full bg-gray-darker">
      <Head>
        <title>Valorant Gaido Weapons</title>
      </Head>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        <div className="flex items-center justify-center flex-col pt-28">
          <Title>WEAPONS</Title>
          <Description>
            Weapons are used by agents to damage and kill/destroy enemy agents
            and their utility.
          </Description>
        </div>
        <div className="justify-center flex mt-20">
          <motion.div className="grid grid-cols-3 lg:grid-cols-1 gap-10 mb-24 lg:scale-95">
            {weapons.map((weapon) => (
              <WeaponsCard key={weapon.uuid} data={weapon} />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Weapons;
