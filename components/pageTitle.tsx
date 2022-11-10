import { ReactNode } from "react";

type TitleProps = {
  children: ReactNode;
};

export const Title = ({ children }: TitleProps) => {
  return <h1 className="font-semibold text-2xl text-white">{children}</h1>;
};
