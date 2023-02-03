import Head from "next/head";
import { AboutCard } from "../../components/aboutCard";

const About = () => {
  const myArray = [
    {
      number: 1,
      title: "RIOT GAMES",
      Link: "https://www.riotgames.com/pt-br",
      image: "Riot-logo",
      description:
        "All rights to the Valorant game belong exclusively to Riot Games.",
    },
    {
      number: 2,
      title: "LINKEDIN",
      Link: "https://www.linkedin.com/in/filipe-leoni-5745551a8/",
      image: "Linkedin-logo",
      description:
        "Connect with me on LinkedIn for professional networking and updates on my career journey.",
    },
    {
      number: 3,
      title: "GITHUB",
      Link: "https://github.com/FilipeLeoni",
      image: "Github-logo",
      description:
        "Check out my source code and other projects on my GitHub profile to see my coding abilities and technical skills in action.",
    },
    {
      number: 4,
      title: "INSTAGRAM",
      Link: "https://www.instagram.com/filipeleoni/",
      image: "Instagram-logo",
      description:
        "Follow me on Instagram for a behind-the-scenes look at my life and exclusive updates on my latest adventures.",
    },
    {
      number: 5,
      title: "VALORANT-API",
      Link: "https://valorant-api.com/",
      image: "VApi-logo",
      description:
        "The API used in this project was valorant-api, an extensive API containing data of most of the game items, assets and much more!",
    },
  ];
  return (
    <div className="min-h-screen bg-gray-darker">
      <Head>
        <title>About Me</title>
      </Head>
      <div className="h-screen about-card bg-center bg-cover flex">
        <div className="text-white flex flex-col pl-44 justify-center">
          <h1 className="font-bold text-4xl mb-8 ">ABOUT PROJECT</h1>
          <p className="w-[600px] text-xl">
            This project was created solely for academic purposes and has no
            affiliation with Riot Games. All rights to the game Valorant belong
            exclusively to Riot Games.
          </p>
          <h1 className="font-bold text-4xl mb-8 mt-20">ABOUT DEVELOPER</h1>
          <p className="w-[600px] text-xl">
            Hello, I&apos;m Filipe Leoni! I&apos;m from Brazil and I&apos;m a
            Front-End Developer. This site was made to practice and improve my
            skills in React, Nextjs, tailwind and JavaScript. I take pride in my
            work and always strive to produce the best results. Below are the
            credits and my social networks, you can connect to see my work and
            stay updated on my latest projects.
          </p>
        </div>
      </div>

      <div className="flex gap-10 py-20 justify-center">
        {myArray.map((item) => (
          <AboutCard
            key={item.number}
            title={item.title}
            link={item.Link}
            logo={require("../../_assets/img/" + item.image + ".png")}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default About;
