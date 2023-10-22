import React from "react";
import PageLayout from "../components/layout/PageLayout";
import Navbar from "../components/navbar/Navbar";

interface mainProps {
  defaultClassName?: string;
}

const Main: React.FC<mainProps> = ({ defaultClassName }) => {
  const MainPage = () => {
    return(
        <>
        <div className="bg-red-400 h-96">뭐야 왜 안나와?</div>
        </>
    )
  };
  return <PageLayout children={MainPage}></PageLayout>;
};

export default Main;
