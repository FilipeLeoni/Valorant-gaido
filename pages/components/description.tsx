import { ReactNode } from "react";

type DescriptionProps = {
  children: ReactNode;
};

export const Description = ({ children }: DescriptionProps) => {
  return <p className="text-gray-lighter mt-4 text-sm">{children}</p>;
};
