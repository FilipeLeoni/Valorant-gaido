import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export const AboutCard = ({ title, link, logo, description }: any) => {
  return (
    <motion.div
      className="bg-gray-dark w-56 h-72 rounded-xl pt-6 text-center break-all"
      whileHover={{ scale: 1.1 }}
    >
      <Link href={link}>
        <a className="cursor-pointer">
          <Image
            src={logo}
            alt={title}
            width="100%"
            height="40px"
            layout="responsive"
            objectFit="contain"
            className="object-scale-down"
          />
        </a>
      </Link>
      <h2 className="mt-5 text-white">{title}</h2>
      <p className="text-sm px-6 mt-2 text-gray-200">{description}</p>
    </motion.div>
  );
};
