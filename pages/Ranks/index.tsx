import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import RankComponent from "../../components/rank";
import { Rank, Tiers } from "../../entities/rank";
import { getRanks } from "../api/valorant-service";

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

  const validTiers = [
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

  const usedRanks = useMemo(() => {
    if (!groupedRanksTiers) {
      return [];
    }

    return validTiers.map((tier) => groupedRanksTiers[tier]);
  }, [groupedRanksTiers, validTiers]);
  console.log(usedRanks);
  return (
    <div className="min-h-screen min-w-screen mt-20 grid grid-cols-8">
      <div className="flex w-96 gap-8">
        {usedRanks.map((tier: any, index: number) => (
          <div className="flex-col flex" key={index}>
            {tier.map((tier: any, index: number) => (
              <div key={index} className={`w-16 bg-[${tier.backgroundColor}]`}>
                <Image
                  src={tier.largeIcon}
                  alt={tier.tierName}
                  width={300}
                  height={300}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ranks;
