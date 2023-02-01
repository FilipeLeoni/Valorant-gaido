import { ReactNode } from "react";

type DescriptionProps = {
  children: ReactNode;
};

export const Description = ({ children }: DescriptionProps) => {
  return (
    <p className="text-gray-300 mt-4 font-SansPro text-center">{children}</p>
  );
};
