import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export const MapCard = ({
  data: { displayIcon, displayName, splash },
}: any) => {
  const slash = `//`;
  const [isHover, setIsHover] = useState(false);

  return (
    <motion.div
      className="bg-gray w-[520px] h-[292px] rounded-xl relative"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="rounded-lg">
        {splash && (
          <Image
            src={splash}
            alt="ss"
            width="520"
            height="292"
            layout="responsive"
            objectFit="cover"
            className="object-scale-down rounded-lg"
          />
        )}
      </div>
      <motion.div
        variants={{
          show: { visibility: "visible" },
          hidden: { visibility: "hidden" },
        }}
        animate={isHover ? "show" : "hidden"}
        className=" flex justify-center items-center rounded absolute top-0 bg-opacity-70 bg-black w-[520px] h-[292px] ease-in-out"
      >
        {displayIcon && (
          <Image src={displayIcon} alt="d" width="250px" height="250px" />
        )}
      </motion.div>
      <div className="bg-pink px-8 text-2xl font-bold text-white rounded py-2 mt-[-20px] absolute flex justify-center items-center">
        <p>
          {slash} {displayName.toUpperCase()}
        </p>
      </div>
    </motion.div>
  );
};
