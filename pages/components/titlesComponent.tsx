import React from "react";

interface Props {
  title: string;
  subtitle: string;
  description: string;
}

export const Titles: React.FC<Props> = ({
  title,
  subtitle,
  description,
}: Props) => {
  return (
    <div>
      <div className="flex items-center xl:justify-center xl:text-center">
        <div className="w-36 h-1 xl:w-12 sm:h-[2px] bg-pink"></div>
        <h2 className=" font-medium text-3xl mx-4 sm:text-2xl">{title}</h2>
        <div className="w-20 h-1 xl:w-12 sm:h-[2px] bg-pink"></div>
      </div>
      <h3 className="text-2xl mt-24"> {subtitle}</h3>
      <p className="max-w-lg mt-12 mb-20 ">{description}</p>
    </div>
  );
};
