import { NextPage } from "next";
import react, { useEffect, useState } from "react";
import Menu from "../components/menu";
import { Card } from "../components/card";
import axios from "axios";

const agents: NextPage = () => {
  return (
    <>
      <div className="home-img bg-center bg-cover h-auto bg-fixed">
        <div className="pt-44 justify-center flex mb-32">
          <Menu />
        </div>
        <div className="justify-center flex">
          <div className="mr-12"></div>
          <div className="grid grid-cols-4 gap-10">
            <Card />
          </div>
        </div>
      </div>
    </>
  );
};

export default agents;
