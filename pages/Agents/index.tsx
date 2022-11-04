import { NextPage } from "next";
import Menu from "../components/menu";

const agents: NextPage = () => {
  return (
    <div className="home-img bg-center bg-cover h-screen bg-fixed">
      <div className="pt-44 justify-center flex">
        <Menu />
      </div>
    </div>
  );
};

export default agents;
