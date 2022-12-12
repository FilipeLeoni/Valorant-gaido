import { filterProps } from "framer-motion";
import { useRouter } from "next/router";
import { getAgents } from "../api/valorant-service";
import React from "react";
import { NextPage } from "next";
import { Agent } from "../../entities/agent";

export async function getStaticProps(context: any) {
  const id = context.params?.id;
  const agent = `${getAgents({ isPlayableCharacter: false })}/${id}`;
  return {
    props: { agent },
  };
}

export async function getStaticPaths() {
  const agents = await getAgents({ isPlayableCharacter: true });

  const paths = agents.map((agent) => {
    return {
      params: {
        id: `${agent.uuid}`,
      },
    };
  });

  return { paths, fallback: false };
}

const AgentPage: any = (displayName: any) => {
  return (
    <div>
      <div>
        <h1>{displayName}</h1>
        <p>dadfa</p>
      </div>
    </div>
  );
};

export default AgentPage;
