import Head from "next/head";
import Image from "next/image";
import PowerCard from "../../components/powerCard";
import Blue from "../../_assets/img/Blue-rounded.svg";
import Red from "../../_assets/img/red-rounded.svg";
import { motion } from "framer-motion";
import { MdAdsClick } from "react-icons/md";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";

const AgentDetails: NextPage = ({ agent }: any) => {
  return (
    <div>
      <Head>
        <title>Valorant Agent {agent.data.displayName}</title>
      </Head>

      <motion.section className="min-h-screen bg-gray-darker relative overflow-hidden">
        <div className="flex w-full justify-center items-start gap-36 z-10 lg:flex-col lg:align-middle lg:items-center relative">
          <div className="w-80 mt-8 md:w-44">
            <Image
              src={agent.data.fullPortraitV2}
              width={300}
              height={600}
              layout="responsive"
              objectFit="cover"
              alt="Weapon"
              className="object-scale-down"
            />
          </div>
          <motion.div
            className="flex flex-col items-start relative mt-32 lg:mt-[-50px] lg:justify-center lg:items-center lg:align-middle lg:text-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <Image
              src={agent.data.role.displayIcon}
              alt="dd"
              width="55px"
              height="55px"
              layout="fixed"
              objectFit="contain"
              className="object-scale-down opacity-30"
            />
            <div className="absolute left-8 top-10 tracking-widest lg:static">
              <p className="text-white mt-[-30px] mb-[-10px]">
                {agent.data.role.displayName.toUpperCase()}
              </p>
              <h1 className="text-5xl font-bold text-[#E8EEAE] tracking-tight">
                {agent.data.displayName.toUpperCase()}
              </h1>
            </div>
            <p className="text-white mt-8 mb-4 w-full max-w-3xl">
              {agent.data.description}
            </p>
            <p className="flex text-gray gap-2 items-center mb-6 opacity-50 text-sm">
              Tap or click to see the skill details <MdAdsClick />{" "}
            </p>
            <motion.div className="text-white gap-2 flex flex-col pb-20 lg:justify-center lg:align-middle lg:items-center">
              {agent.data?.abilities.map((ability: any, i: number) => (
                <PowerCard data={ability} key={i} />
              ))}
            </motion.div>
          </motion.div>
        </div>
        <div className="absolute right-0 top-0 z-0">
          <Image src={Red} alt="2" />
        </div>
        <div className="absolute left-20 bottom-0 z-0 ml-[-300px] mb-[-200px]">
          <Image src={Blue} alt="2" />
        </div>
      </motion.section>
    </div>
  );
};

export default AgentDetails;

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(
    "https://valorant-api.com/v1/agents?isPlayableCharacter=true"
  );
  const agents: any = await res.json();
  const paths = agents.data.map((agent: any) => {
    return {
      params: { agentId: agent.uuid },
    };
  });

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const res = await fetch(
    `https://valorant-api.com/v1/agents/${params.agentId}`
  );
  const agent = await res.json();

  return {
    props: {
      agent,
    },
  };
};
