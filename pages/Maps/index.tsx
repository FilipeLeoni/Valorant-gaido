import { NextPage } from "next";
import { Title } from "../../components/pageTitle";
import { Map } from "../../entities/weapon";
import { useState, useEffect } from "react";
import { getMaps } from "../api/valorant-service";
import { MapCard } from "../../components/mapCard";
import { Description } from "../../components/description";
import { motion } from "framer-motion";

const Maps: NextPage = () => {
  const [maps, setMaps] = useState<Map[]>([]);
  useEffect(() => {
    (async () => {
      try {
        const maps = await getMaps();
        setMaps(maps);
      } catch (error) {
        console.log("Error trying to search for maps");
      }
    })();
  }, []);
  console.log(maps);
  return (
    <div className="min-h-screen bg-gray-darker flex justify-center items-center flex-col gap-20 pt-24">
      <motion.div
        className="flex flex-col text-center"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        <Title>Maps</Title>
        <Description>
          Meet valorants maps where each map serves as a stage to showcase your
          creativity. Maps are tailor-made for team strategies, spectacular
          moves, and electrifying moments.
        </Description>
      </motion.div>
      <div className="grid grid-cols-2 gap-y-20 gap-x-20 pb-44">
        {maps.map((map) => (
          <MapCard key={map.uuid} data={map} />
        ))}
      </div>
    </div>
  );
};

export default Maps;
