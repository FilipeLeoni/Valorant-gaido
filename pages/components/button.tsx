import { NextPage } from "next";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export const Button: any = (props: any) => {
  const glowVariants: any = {
    initial: {
      opacity: 0,
    },
    hover: {
      opacity: 1,
    },
  };
  return (
    <>
      <motion.div whileTap={{ scale: 0.8 }} className="flex xl:inline">
        <Link href={props.link}>
          <a className="py-[10px] px-8 text-white bg-pink rounded-lg font-semibold border-pink border-solid hover:text-pink hover:bg-transparent border-2 ease-in-out duration-200 lg:text-sm lg:py-2">
            {props.title}
          </a>
        </Link>
      </motion.div>
    </>
  );
};
