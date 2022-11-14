import Dialog from "../../components/dialog";
import { NextPage } from "next";
import { Description } from "../../components/description";
import { Title } from "../../components/pageTitle";
import React from "react";
import { Menu } from "../../components/menu";
import { motion } from "framer-motion";

const Weapons: NextPage = () => {
  return (
    <div className="h-screen w-full bg-gray-darker">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        <div className="flex items-center justify-center flex-col pt-28 text-gray-dark">
          <Title>WEAPONS</Title>
          <span className="text-gray-light">
            <Description>
              Weapons are used by agents to damage and kill/destroy enemy agents
              and their utility.
            </Description>
          </span>
          <div></div>
          <div className="mt-12">
            <Dialog />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Weapons;
