import Image from "next/image";
import Agents from "../_assets/img/weapon-banner.png";
import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";
import { motion } from "framer-motion";
import Head from "next/head";
import clsx from "clsx";

export const WeaponsSkin = ({ data: { displayIcon, displayName } }: any) => {
  return (
    <div
      className={clsx(
        "px-8 py-6 bg-gradient-to-r from-[#FF416C] to-[#FF4B2B] rounded-lg",
        displayIcon === null ? "hidden" : "block"
      )}
    >
      {displayIcon && (
        <div className="w-80">
          <h3 className="mb-2 text-xl justify-center flex text-white font-bold">
            {displayName}
          </h3>
          <Image
            src={displayIcon}
            width="100%"
            height="40px"
            layout="responsive"
            objectFit="contain"
            alt="Skin"
            className="w-full h-full object-cover rounded-3xl pointer-events-none drop-shadow-md"
          />
        </div>
      )}
    </div>
  );
};
