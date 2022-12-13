import { NextPage } from "next";
import React, { useEffect, useMemo, useState } from "react";
import { Menu } from "../../components/menu";
import { Card } from "../../components/card";
import { Agent } from "../../entities/agent";
import { motion } from "framer-motion";
import { getAgents } from "../api/valorant-service";
import { Title } from "../../components/pageTitle";
import { Description } from "../../components/description";
import { AgentRoles } from "../../utils/constants";
import Link from "next/link";

const Agents: NextPage = () => {
  const [agents, setAgents] = useState<Agent[]>([]);
  const [activeRoleId, setActiveRoleIndex] = useState<number>(0);

  const filtered = activeRoleId
    ? agents.filter((agent) =>
        agent.role.displayName.includes(AgentRoles[activeRoleId])
      )
    : agents;

  const onMenuChange = (roleId: number) => setActiveRoleIndex(roleId);

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
      <div className="home-img w-full bg-center bg-cover h-auto min-h-screen bg-fixed">
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
            <Menu
              onMenuChange={onMenuChange}
              selectedItemId={activeRoleId}
              items={AgentRoles}
            />
          </div>
          <div className="justify-center flex">
            <motion.div className="grid grid-cols-4 gap-10 mb-24">
              {filtered.map((agent) => (
                <Card key={agent.uuid} data={agent} />
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Agents;
