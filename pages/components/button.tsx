import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  link: string;
  title: string;
}

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
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
