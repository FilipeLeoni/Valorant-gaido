import Image from "next/image";
import Agents from "../../_assets/img/weapon-banner.png";
import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";
import { motion } from "framer-motion";
import Head from "next/head";
import { WeaponsSkin } from "../../components/weaponSkin";
import classnames from "clsx";
import Blue from "../../_assets/img/Blue-rounded.svg";
import Red from "../../_assets/img/red-rounded.svg";
import Body from "../../_assets/img/body.svg";
import { useEffect, useRef, useState } from "react";
import { MdTouchApp } from "react-icons/md";
import {
  GiReloadGunBarrel,
  GiMachineGunMagazine,
  GiGunshot,
  GiReticule,
} from "react-icons/gi";
import Link from "next/link";

const WeaponsDetails = ({ Weapon }: any) => {
  const ReloadTime = `Reload Time: ${Weapon.data.weaponStats.reloadTimeSeconds} Sec`;
  const FireRate = `Fire Rate: ${Weapon.data.weaponStats.fireRate}`;
  const MagazineSize = `Magazine Size: ${Weapon.data.weaponStats.magazineSize} Bullets`;
  const AimZoom = `Aim Zoom: ${Weapon.data.weaponStats.adsStats?.zoomMultiplier}`;
  const [width, setWidth] = useState(0);

  const carouselRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function updateStateOnResize() {
      if (!carouselRef.current) return;
      const { scrollWidth, offsetWidth } = carouselRef.current;
      setWidth(() => scrollWidth - offsetWidth);
    }

    updateStateOnResize();

    window.addEventListener("resize", updateStateOnResize);
    return () => window.removeEventListener("resize", updateStateOnResize);
  }, []);
  return (
    <motion.div className="w-full h-auto min-h-screen bg-gray-darker">
      <Head>
        <title>Valorant Weapon: {Weapon.data.displayName}</title>
      </Head>
      <motion.div className="flex flex-col justify-center h-auto min-h-screen md:items-center">
        <motion.div
          className="flex justify-center items-center justify-items-center flex-col align-middle content-center "
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-white text-[120px] md:text-[90px] font-bold md:mb-10">
            {Weapon.data.displayName.toUpperCase()}
          </h1>
          <div className="max-w-[550px] w-full mt-[-80px] z-10">
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
        </motion.div>
        <motion.div
          className="text-white flex gap-8 text-4xl font-bold border-b-4 absolute rounded border-pink w-72 justify-center ml-32 bottom-16 z-10 md:ml-0 py-3 bg-gray-darker bg-opacity-40"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <Link href="#Stats" className="cursor-pointer">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              className="cursor-pointer"
            >
              STATS
            </motion.a>
          </Link>
          <Link href="#Skins" className="cursor-pointer">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              className="cursor-pointer"
            >
              SKINS
            </motion.a>
          </Link>
        </motion.div>
        <div className="absolute right-10 top-0">
          <Image src={Red} alt="2" />
        </div>
        <div className="absolute top-72 ml-[-400px]">
          <Image src={Blue} alt="2" width={1000} height={1000} />
        </div>
      </motion.div>

      {/*STATS SECTIONS*/}

      <section className="h-screen sm:mb-80" id="Stats">
        <div className="flex justify-center items-center gap-80 pt-20 lg:flex-col lg:gap-0">
          <div className="text-white flex flex-col items-center text-3xl font-bold w-44  gap-14 z-10 lg:flex">
            <h2>DAMAGE</h2>
            <div className="flex relative max-w-[1200px]">
              <div className="relative w-full md:w-20">
                <Image src={Body} alt="dd" />
              </div>
              <div className="md:text-base ">
                <div className="absolute top-3 border-t-2 w-44 md:w-24">
                  <p>
                    Head: {Weapon.data.weaponStats.damageRanges[0].headDamage}
                  </p>
                </div>
                <div className="absolute top-36 ml-4 border-t-2 w-44 md:w-24">
                  <p>
                    Chest: {Weapon.data.weaponStats.damageRanges[0].bodyDamage}
                  </p>
                </div>
                <div className="absolute bottom-40 ml-4 border-t-2 w-44 md:w-24">
                  <p>
                    Legs: {Weapon.data.weaponStats.damageRanges[0].legDamage}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-dark max-w-[524px] h-[425px] m-20 w-4/5 text-2xl mt-16 flex justify-center rounded-lg relative">
            <h2 className="absolute text-white mt-8 text-4xl font-bold">
              STATS
            </h2>
            <div className="text-white flex flex-col justify-center md:text-base">
              <div className="flex items-end gap-2 mt-4 mb-8">
                <GiReloadGunBarrel size={40} />
                {ReloadTime}
              </div>
              <div className="flex items-center gap-2 mb-8">
                <GiGunshot size={40} /> {FireRate}
              </div>
              <div className="flex items-center gap-2 mb-8">
                <GiMachineGunMagazine size={40} /> {MagazineSize}
              </div>

              <div className="flex items-center gap-2">
                <GiReticule size={40} />
                {AimZoom}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="absolute right-10 top-10">
        <Image src={Red} alt="2" />
      </div>

      {/*SKINS SECTIONS*/}

      <section
        className="h-screen flex flex-col items-center justify-center relative overflow-hidden"
        id="Skins"
      >
        <h2 className="text-white text-4xl  z-10">SKINS</h2>
        <div className="text-gray-400 flex justify-center items-center gap-1 mb-24 mt-3">
          <p>Drag left to view more skins</p>
          <MdTouchApp size={22} />
        </div>
        <div className="flex justify-center pb-20 z-10 md:items-end">
          <motion.div
            ref={carouselRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            whileTap={{ cursor: "grabbing" }}
            className="w-4/5 xl:max-w-7xl max-w-[1500px] md:max-w-4xl cursor-grab overflow-hidden flex content-center self-center z-10"
          >
            <motion.div
              key={width}
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
              className="flex space-x-16 lg:space-x-12 md:space-x-6 md:w-[430px]"
            >
              {Weapon.data.skins.map((skin: any, i: any) => (
                <WeaponsSkin data={skin} key={i} />
              ))}
            </motion.div>
          </motion.div>
        </div>
        <div className="absolute top-2 left-0 z-0 ml-[-400px]">
          <Image src={Blue} alt="2" width={1000} height={1000} />
        </div>
      </section>
    </motion.div>
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
