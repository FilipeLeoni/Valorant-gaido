import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import Menu from "../components/menu";
import { Card } from "../components/card";
import { Agent } from "../entities/agent";
import { motion } from "framer-motion";
import { getAgents } from "../api/valorant-service";
import { Title } from "../components/pageTitle";
import { Description } from "../components/description";

const Agents: NextPage = () => {
  const [agents, setAgents] = useState<Agent[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const agents = await getAgents({ isPlayableCharacter: true });
        setAgents(agents);
      } catch (error) {
        console.log("Error trying to search for agents");
      }
    })();
  }, []);

  return (
    <>
      <div className="home-img  bg-center bg-cover h-auto min-h-screen bg-fixed">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <div className="pt-28 justify-center flex mb-16 text-center">
            <div>
              <Title>AGENTS</Title>
              <Description>
                Agents with adaptive, fast, and lethal abilities that create
                opportunities for you to show off your shooting mechanics.
              </Description>
            </div>
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

export default Agents;
