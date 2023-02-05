import clsx from "clsx";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import RankComponent from "../../components/rank";
import { Rank, Tiers } from "../../entities/rank";
import { getRanks } from "../api/valorant-service";
import { motion } from "framer-motion";

const Ranks = () => {
  const [ranks, setRanks] = useState<Rank[]>([]);
  useEffect(() => {
    (async () => {
      try {
        const ranks = await getRanks();
        setRanks(ranks);
      } catch (error) {
        console.log("Error trying to search for maps");
      }
    })();
  }, []);

  const validTiersMemo = useMemo(() => {
    return [
      "IRON",
      "BRONZE",
      "SILVER",
      "GOLD",
      "PLATINUM",
      "DIAMOND",
      "ASCENDANT",
      "IMMORTAL",
      "RADIANT",
    ];
  }, []);

  const groupedRanksTiers = ranks[4]?.tiers.reduce((acc: any, next: any) => {
    if (acc[next.divisionName]) {
      acc[next.divisionName] = [...acc[next.divisionName], next];
      return acc;
    }

    return {
      ...acc,
      [next.divisionName]: [next],
    };
  }, {});

  const usedRanks: any = useMemo(() => {
    if (!groupedRanksTiers) {
      return [];
    }

    return validTiersMemo.map((tier) => groupedRanksTiers[tier]);
  }, [groupedRanksTiers, validTiersMemo]);

  return (
    <div className="min-h-screen min-w-screen flex flex-col ranks-bg items-center">
      <motion.h1
        className="text-5xl font-bold text-[#BEC04D] mb-16 mt-32 text-center"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        COMPETITIVE RANKS
      </motion.h1>
      <div className="flex justify-center items-center">
        <div className="flex gap-10 flex-wrap lg:justify-center lg:mb-24">
          {usedRanks.map((tier: any, index: number) => (
            <div className="flex-col flex items-center" key={index}>
              <motion.div
                className="text-xl text-white mb-5 border-b"
                animate={{ x: [-20, 0], opacity: 1 }}
                transition={{
                  duration: 1,
                  delay: 0.3,
                }}
                initial={{ opacity: 0 }}
              >
                {tier[0].divisionName}
              </motion.div>
              {tier.map((item: any, index: number) => (
                <motion.div
                  key={index}
                  className="w-20 p-1 flex justify-center items-center bg-[#82CFFF21] bg-opacity-20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                  >
                    <Image
                      src={item.largeIcon}
                      alt={item.tierName}
                      layout="fixed"
                      width={72}
                      height={72}
                    />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ranks;
