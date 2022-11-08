import { NextPage } from "next";
import { useEffect, useState } from "react";
import Menu from "../components/menu";
import { Card } from "../components/card";
import { Agent } from "../entities/agent";
import { motion } from "framer-motion";
import { getAgents } from "../api/valorant-service";
import { Title } from "../components/pageTitle";

const agents: NextPage = () => {
  const [agents, setAgents] = useState<Agent[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const agents = await getAgents({ isPlayableCharacter: true });
        setAgents(agents);
      } catch (error) {
        console.log("erou bixo");
      }
    })();
  }, []);

  return (
    <>
      <div className="home-img bg-center bg-cover h-auto min-h-screen bg-fixed">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <div className="pt-28 justify-center flex mb-16">
            <Title title="AGENTS" />
          </div>
          <div className="justify-center flex mb-24">
            <Menu />
          </div>
          <div className="justify-center flex">
            <div className="mr-12"></div>
            <div className="grid grid-cols-4 gap-10 mb-24">
              {agents.map((agent) => (
                <Card key={agent.uuid} data={agent} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default agents;
