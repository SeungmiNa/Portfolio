import React from "react";
import { useNavigate } from "react-router-dom";
import BasicButton from "../components/buttons/BasicButton";

interface mainProps {
  defaultClassName?: string;
}

const Main: React.FC<mainProps> = ({ defaultClassName }) => {
  const navigate = useNavigate();

  const MainPage = () => {
    return (
      <>
        <div className="sm:hidden">
          <div className="h-full flex-col bg-green-500">
            <div className="bg-gray-200">intro</div>
            <div className="bg-emerald-200 flex flex-col">
              Inizio
              <BasicButton
                text="Go"
                onClick={() => {
                  navigate("/inizio");
                }}
              />
            </div>
            <div className="bg-blue-200">Delivious</div>
            <div className="bg-red-200">3D Icons</div>
            <div className="bg-purple-200">Landing page</div>
          </div>
        </div>

        <div className="invisible sm:visible flex flex-1 bg-red-200">
          <div className="grow flex overflow-x-auto">
            <div className="bg-gray-200 w-96">intro</div>
            <div className="bg-emerald-200 w-96"> Inizio <BasicButton text="Go" onClick={() => {navigate("/inizio")}} /></div>
            <div className="bg-blue-200 w-96">Delivious<BasicButton text="Go" onClick={() => {navigate("/delivious")}} /> </div>
            <div className="bg-red-200 w-96">3D Icons</div>
            <div className="bg-purple-200 w-96">Landing page</div>
          </div>
        </div>
      </>
    );
  };
  return <>{MainPage()}</>;
};

export default Main;
