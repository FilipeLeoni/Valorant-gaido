import Head from "next/head";

const AgentDetails = ({ Agent }: any) => {
  return (
    <div>
      <Head>
        <title>Valorant Agent {Agent.data.displayName}</title>
      </Head>
      <div>{Agent.data.displayName}</div>
    </div>
  );
};

export default AgentDetails;

export async function getServerSideProps(context: any) {
  const response = await fetch(
    `https://valorant-api.com/v1/agents/${context.query.agentId}`
  );
  const Agent = await response.json();
  return {
    props: {
      Agent,
    },
  };
}
