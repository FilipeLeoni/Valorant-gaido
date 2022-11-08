import { NextPage } from "next";
type titleProps = {
  title: string;
};

export const Title = ({ title }: titleProps) => {
  return <h1 className="font-semibold text-2xl text-white">{title}</h1>;
};
