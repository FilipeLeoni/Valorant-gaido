import { NextPage } from "next";
import { useEffect, useState } from "react";
import Menu from "../components/menu";
import { Card } from "../components/card";
import api from "../api/api";
import { Agent } from "../entities/agent";
import { getAgents } from "../api/valorant-service";

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
      <div className="home-img bg-center bg-cover h-auto bg-fixed">
        <div className="pt-44 justify-center flex mb-32">
          <Menu />
        </div>
        <div className="justify-center flex">
          <div className="mr-12"></div>
          <div className="grid grid-cols-4 gap-10">
            {agents.map((agent) => (
              <Card key={agent.uuid} data={agent} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default agents;
