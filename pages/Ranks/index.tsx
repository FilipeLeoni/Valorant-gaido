import { useEffect, useState } from "react";
import RankComponent from "../../components/rank";
import { Rank, Tiers } from "../../entities/rank";
import { getRanks } from "../api/valorant-service";

const Ranks = () => {
  const [ranks, setRanks] = useState<Rank[]>([]);
  console.log(ranks);
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
  return (
    <div className="min-h-screen min-w-screen mt-20 grid grid-cols-8">
      <div className="">
        {ranks[4]?.tiers.map((rank: any, i: any) => (
          <div key={i} className="col-start-1">
            {rank.divisionName === "IRON" ? (
              <div>
                <RankComponent data={rank} />
              </div>
            ) : rank.divisionName === "GOLD" ? (
              <div className="col-start-3 col-span-3">
                <div>
                  <RankComponent
                    data={rank}
                    className="col-start-3 col-span-3"
                  />
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ranks;
