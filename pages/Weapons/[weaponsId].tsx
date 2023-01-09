import Image from "next/image";
import Agents from "../../_assets/img/weapon-banner.png";
import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";

const WeaponsDetails = ({ Weapon }: any) => {
  return (
    <div>
      <div className=" bg-gray h-screen w-full flex items-center justify-center">
        <div className="w-[1100px] absolute ml-[-525px] mt-24 left-2">
          <Image src={Agents} alt="agent" />
        </div>

        <div className="w-[620px] rotate-[25deg]">
          <div>
            <Image
              src={Weapon.data.displayIcon}
              width="100%"
              height="40px"
              layout="responsive"
              objectFit="contain"
              alt="Weapon"
              className="object-scale-down"
            />
          </div>
        </div>
        <div className=" ml-44 text-8xl  items-center flex-col flex absolute right-44 text-gray-dark">
          <RiArrowUpSLine />
          <h2 className="text-4xl text-pink font-bold">
            {Weapon.data.displayName.toUpperCase()}
          </h2>
          <p className="text-2xl text-gray-dark">
            {Weapon.data.shopData.category}
          </p>
          <RiArrowDownSLine />
        </div>
        <div className="text-pink flex w-[1000px] gap-10 justify-end pr-44 pb-5 bottom-1 absolute font-bold text-4xl right-10 border-b-4 border-pink">
          <h3>INFO</h3>
          <h3>STATS</h3>
          <h3>SKINS</h3>
        </div>
      </div>
    </div>
  );
};

export default WeaponsDetails;

export async function getServerSideProps(context: any) {
  const response = await fetch(
    `https://valorant-api.com/v1/weapons/${context.query.weaponsId}`
  );
  const Weapon = await response.json();
  return {
    props: {
      Weapon,
    },
  };
}
