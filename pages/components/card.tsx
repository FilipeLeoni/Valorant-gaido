import React, { useState, useEffect } from "react";
import { Agent } from "../entities/agent";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Props {
  data: Agent;
}

export const Card: React.FC<Props> = ({
  data: { background, fullPortraitV2, displayName, role },
}) => {
  const [isHover, setIsHover] = useState(false);
  const control = useAnimation();
  const [ref, inView] = useInView();
  const cardVariant = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0 },
  };

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return (
    <motion.div
      ref={ref}
      variants={cardVariant}
      initial="hidden"
      animate={control}
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="w-[280px] h-[400px] bg-pink rounded-lg cursor-pointer overflow-hidden"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <motion.div className="w-[280px] h-[400px]">
          <div>
            <div className="absolute w-[280px] ml-[-4px] opacity-50 mt-[-10px] flex justify-center items-center rounded">
              <Image
                src={background}
                width="280px"
                height="400px"
                alt="background"
              />
            </div>
            <motion.div
              className="w-[400px] ml-[-53px] relative object-cover h-[500px] "
              variants={{
                open: { scale: 1.1 },
                closed: { scale: 1 },
              }}
              animate={isHover ? "open" : "closed"}
            >
              <Image
                src={fullPortraitV2}
                width="400px"
                height="363px"
                alt="Agents"
              />
            </motion.div>
          </div>
          <div className="relative mt-[-310px] text-blue pt-28 bg-gradient-to-t rounded from-pink via-pink to-transparent justify-center flex">
            <div className="items-center flex flex-col">
              <h2 className="text-xl font-semibold ">{displayName}</h2>
              <p className="mb-2 leading-4 text-sm">{role.displayName}</p>
              <div className="w-6">
                <Image
                  src={role.displayIcon}
                  width="24px"
                  height="24px"
                  alt="Role"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
