import React from "react";
import { Agent } from "../entities/agent";
import Image from "next/image";
import { motion } from "framer-motion";
interface Props {
  data: Agent;
}

export const Card: React.FC<Props> = ({
  data: { background, fullPortraitV2, displayName, role },
}) => {
  return (
    <>
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="w-[280px] h-[400px] bg-pink rounded-lg cursor-pointer "
      >
        <div>
          <div className="absolute w-[290px] ml-[-4px] opacity-50 mt-[-28px] flex justify-center items-center ">
            <Image src={background} width="290px" height="366px" />
          </div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-[400px] ml-[-53px] relative object-cover h-[500px]"
          >
            <Image src={fullPortraitV2} width="400px" height="363px" />
          </motion.div>
        </div>
        <div className="relative mt-[-310px] text-blue pt-28 bg-gradient-to-t rounded from-pink via-pink to-transparent justify-center flex">
          <div className="items-center flex flex-col">
            <h2 className="text-xl font-semibold ">{displayName}</h2>
            <p className="mb-2 leading-4 text-sm">{role.displayName}</p>
            <div className="w-6">
              <Image src={role.displayIcon} width="24px" height="24px" />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};
