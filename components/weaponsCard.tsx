import Image from "next/image";
import Coin from "../_assets/img/coin.png";
import { motion, useAnimation } from "framer-motion";
import { Weapon } from "../entities/weapon";
interface Props {
  data: Weapon;
}

export const WeaponsCard: React.FC<Props> = ({
  data: { displayName, shopData, displayIcon },
}) => {
  return (
    <div className="w-96 h-52 bg-gray-lighter flex flex-col cursor-pointer">
      <div className="flex flex-col items-center overflow-hidden object-contain">
        <motion.div
          className="w-72 h-60 mt-10 ml-5 object-contain"
          whileHover={{ rotate: 15 }}
        >
          <Image
            src={displayIcon}
            width="100%"
            height="40px"
            layout="responsive"
            objectFit="contain"
            alt="Weapon"
            className="object-scale-down"
          />
        </motion.div>
      </div>
      <div className="mt-[-165px] flex-col font-bold flex ml-6">
        <h2 className="text-pink font-SansPro text-[40px]">{displayName}</h2>
        <div className="flex items-center mt-[-8px] 6">
          <span className="w-5">
            <Image src={Coin} alt="" width="20px" height="20px" />
          </span>
          <p className="text-xl font-bold mt-[-7px] ml-1 text-gray-dark">
            {shopData?.cost}
          </p>
        </div>
      </div>
    </div>
  );
};
