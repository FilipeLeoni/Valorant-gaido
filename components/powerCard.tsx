import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import Passive from "../_assets/img/passiveIcon.png";
const PowerCard = ({
  data: { displayIcon, displayName, description },
}: any) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div
      className={clsx(
        "bg-gray-dark px-4 rounded-lg flex items-center w-[800px] md:w-52 lg:w-72 gap-6 card",
        isOpen
          ? "h-[100px] py-16 lg:h-auto lg:flex-col lg:py-8"
          : "h-[66px] py-6 gap-1 lg:h-24 "
      )}
      layout
      transition={{ layout: { duration: 0.8, type: "spring" } }}
      onClick={() => setIsOpen(!isOpen)}
    >
      <motion.div layout="position">
        <Image
          src={displayIcon === null ? Passive : displayIcon}
          alt="Ability"
          width={isOpen ? 70 : 36}
          height={50}
          layout="fixed"
          objectFit="contain"
          className="object-contain"
        />
      </motion.div>
      <div>
        <motion.div
          className="text-white child lg:text-center lg:align-middle lg:justify-center lg:items-center"
          layout="position"
        >
          <p className="text-2xl mb-1 ">{displayName}</p>
        </motion.div>
        {isOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <p className="text-sm expand lg:text-center lg:break-all">
              {description}
            </p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default PowerCard;
