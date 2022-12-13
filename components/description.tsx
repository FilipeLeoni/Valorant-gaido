import { ReactNode } from "react";

type DescriptionProps = {
  children: ReactNode;
};

export const Description = ({ children }: DescriptionProps) => {
  return <p className="text-gray mt-4 font-SansPro">{children}</p>;
};
