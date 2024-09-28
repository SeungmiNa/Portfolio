import React, { useState } from "react";
import InizioBranding from "../components/Inizio/InizioBranding";
import InizioDesign from "../components/Inizio/InizioDesign";
import InizioDevelop from "../components/Inizio/InizioDevelop";
import InizioHero from "../components/Inizio/InizioHero";
import ProjectLayout from "../components/layout/ProjectLayout";
import { Tabs } from "../components/Tabs";

interface MainProps {
  defaultClassName?: string;
}

const Inizio: React.FC<MainProps> = ({ defaultClassName }) => {
  const [currentTab, setCurrentTab] = useState(0);

  const tabs = [
    {
      title: "UX/UI Designer",
      value: "designer",
      content: <InizioDesign />,
    },
    {
      title: "UI developer",
      value: "developer",
      content: <InizioDevelop />,
    },
    {
      title: "Branding",
      value: "branding",
      content: <InizioBranding />,
    },
  ];

  const renderContent = () => {
    return (
      <div className="bg-[#101010] h-full">
        <div className=" border border-red-500 max-w-7xl mx-auto">
          <InizioHero />
          <Tabs tabs={tabs} />
        </div>
      </div>
    );
  };

  return (
    <>
      <ProjectLayout content={renderContent} />
    </>
  );
};

export default Inizio;



          {/* <Tab.Group
          onChange={(index) => {
            setCurrentTab(index);
            console.log("Changed selected tab to:", index);
          }}
        >
          <div className="border border-emerald-400">
            <Tab.List className="text-gray-500 text-base flex space-x-4 px-8 border-b border-gray-500">
              <Tab
                className={({ selected }) =>
                  `${
                    selected
                      ? "bg-gradient-to-r from-[#5465FD] to-[#0DB9B9] rounded-full text-white font-medium"
                      : "text-white"
                  } px-5`
                }
              >
                Branding
              </Tab>
              <Tab
                className={({ selected }) =>
                  `${
                    selected
                      ? "text-[#0DB9B9] border-b-2 border-[#0DB9B9]"
                      : "text-gray-500"
                  } py-2`
                }
              >
                UX/UI Design
              </Tab>
              <Tab
                className={({ selected }) =>
                  `${
                    selected
                      ? "text-[#0DB9B9] border-b-2 border-[#0DB9B9]"
                      : "text-gray-500"
                  } py-2 px-4`
                }
              >
                UI Developer
              </Tab>
            </Tab.List>
          </div>

          <Tab.Panel>
            <InizioBranding />
          </Tab.Panel>
          <Tab.Panel>
            <InizioDesign />
          </Tab.Panel>
          <Tab.Panel>
            <InizioDevelop />
          </Tab.Panel>
        </Tab.Group> */}

          {/* <div className="flex text-white container px-6 w-full">
          <>
            <button className="hover:bg-lime-600 rounded-full p-1">
              <IoChevronBack className="h-6 w-6 text-white " />
            </button>
            <div className='flex-1 text-center'>project Name{}</div>
            <button className="hover:bg-lime-600 rounded-full p-1">
              <IoChevronForward className="h-6 w-6 text-white" />
            </button>
          </>
        </div>

        <div className="py-6 text-white">
          <Contact/>

        </div> */}
