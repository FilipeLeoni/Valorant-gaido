import { NextPage } from "next";
import Image from "next/image";
import LineLg from "../../_assets/img/line1.png";
import LineSm from "../../_assets/img/line2.png";

export const Line1: NextPage = () => {
  return <Image src={LineLg}></Image>;
};

export const Line2: NextPage = () => {
  return <Image src={LineSm}></Image>;
};
