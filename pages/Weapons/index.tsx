import Dialog from "../components/dialog";
import { NextPage } from "next";
import { Description } from "../components/description";
import { Title } from "../components/pageTitle";
import React from "react";

const Weapons: NextPage = () => {
  return (
    <div className="h-screen w-screen bg-gray-darker">
      <div>
        <div>
          <Title>Title Here</Title>
          <Description>Description Here</Description>
          <div className="flex items-center justify-center pt-20">
            <Dialog />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weapons;
