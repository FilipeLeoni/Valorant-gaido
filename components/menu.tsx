import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import classnames from "clsx";
export interface MenuProps {
  onMenuChange: (value: any) => void;
  selectedItemId: number;
  items: any[];
}

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

export const Menu: React.FC<MenuProps> = ({
  onMenuChange,
  selectedItemId,
  items,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="w-[300px] absolute z-10"
      style={{ zIndex: isOpen ? "10" : "0" }}
    >
      <motion.button
        className="rounded-lg bg-white text-gray-darker px-5 py-2 mb-2 w-[300px] flex items-center gap-5 justify-between font-SansPro text-xl"
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {items[selectedItemId]}
        <motion.div
          variants={{
            open: { rotate: 180 },
            closed: { rotate: 0 },
          }}
          transition={{ duration: 0.2 }}
          style={{ originY: 0.55 }}
        >
          <svg width="15" height="15" viewBox="0 0 20 20">
            <path d="M0 7 L 20 7 L 10 16" />
          </svg>
        </motion.div>
      </motion.button>
      <motion.ul
        className="flex flex-col gap-2 w-[300px]"
        variants={{
          open: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05,
            },
          },
          closed: {
            clipPath: "inset(10% 50% 90% 50% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3,
            },
          },
        }}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      >
        <div
          className="bg-white text-gray-darker text-xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {items.map((item: string, index: number) => (
            <motion.li
              className={classnames(
                "cursor-pointer",
                "hover:bg-gray-darker",
                "hover:text-gray",
                "px-5",
                "py-2",
                "rounded",
                "font-SansPro"
              )}
              variants={itemVariants}
              key={index}
              onClick={() => onMenuChange(index)}
            >
              {item}
            </motion.li>
          ))}
        </div>
      </motion.ul>
    </motion.nav>
  );
};
