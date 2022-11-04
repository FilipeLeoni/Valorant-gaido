import { useState } from "react";
import { motion, Variants } from "framer-motion";

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="w-[300px] p-3"
    >
      <motion.button
        className="rounded-lg bg-white px-5 py-2 mb-2 w-[300px] flex items-center gap-5 justify-between text-lg"
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        Choose Class
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
        <div className="bg-white p-6 text-lg">
          <motion.li className="mb-2" variants={itemVariants}>
            <a href="/">Initiators</a>
          </motion.li>
          <motion.li className="mb-2" variants={itemVariants}>
            <a href="/">Sentinels</a>
          </motion.li>
          <motion.li className="mb-2" variants={itemVariants}>
            <a href="/">Duelists</a>
          </motion.li>
          <motion.li className="" variants={itemVariants}>
            <a href="/">Controllers</a>
          </motion.li>
        </div>
      </motion.ul>
    </motion.nav>
  );
}
