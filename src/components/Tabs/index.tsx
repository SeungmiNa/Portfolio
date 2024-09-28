import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../../utils/cn";

type Tab = {
  title: string;
  value: string;
  content?: string | React.ReactNode | any;
};

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}: {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
}) => {
  const [active, setActive] = useState<Tab>(propTabs[0]);
  const [tabs, setTabs] = useState<Tab[]>(propTabs);

  const moveSelectedTabToTop = (idx: number) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };

  const [hovering, setHovering] = useState(false);

  return (
    <div className="relative flex flex-col items-center">
      <div
        className={cn(
          "relative mx-auto",
          containerClassName
        )}
      >
        <div className="space-x-6 mx-auto border border-[#3E3E3E] rounded-full p-1 bg-[#181C1E] flex items-center">
          {propTabs.map((tab, idx) => (
            <button
              key={tab.title}
              onClick={() => {
                moveSelectedTabToTop(idx);
              }}
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
              className={cn("relative px-4 py-1 rounded-full", tabClassName)}
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {active.value === tab.value && (
                <motion.div
                  layoutId="clickedbutton"
                  transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                  className={cn(
                    "absolute inset-0 rounded-full bg-gradient-to-r from-[#5465FD] to-[#0DB9B9]",
                    activeTabClassName
                  )}
                />
              )}

              <span className="relative block text-black dark:text-white font-medium">
                {tab.title}
              </span>
            </button>
          ))}
        </div>
      </div>
      <FadeInDiv
        tabs={tabs}
        active={active}
        key={active.value}
        hovering={hovering}
        className={cn("", contentClassName)}
      />
    </div>
  );
};

export const FadeInDiv = ({
  className,
  tabs,
  hovering,
}: {
  className?: string;
  key?: any;
  tabs: Tab[];
  active: Tab;
  hovering?: boolean;
}) => {
  const isActive = (tab: Tab) => {
    return tab.value === tabs[0].value;
  };
  return (
    <div className="w-full h-full my-24 px-4">
      {tabs.map((tab, index) => (
        <>
          {/* <motion.div
            key={tab.value}
            layoutId={tab.value}
            style={{
              scale: 1 - idx * 0.1,
              top: hovering ? idx * -50 : 0,
              zIndex: -idx,
              opacity: idx < 3 ? 1 - idx * 0.1 : 0,
            }}
            animate={{
              y: isActive(tab) ? [0, 40, 0] : 0,
            }}
            className={cn("w-full h-full", className)}
          > */}
          <div
            key={index}
            style={{ display: isActive(tab) ? "block" : "none" }}
          >
            {tab.content}
          </div>
        </>
      ))}
    </div>
  );
};



// import React, { useState } from 'react';
// import InizioBranding from '../Inizio/InizioBranding';
// import InizioDesign from '../Inizio/InizioDesign';
// import InizioDevelop from '../Inizio/InizioDevelop';

// interface Tab {
//   label: string;
//   content: JSX.Element;
// }

// const Tabs: React.FC = () => {
//   const [currentTab, setCurrentTab] = useState<number>(0);

//   const tabs: Tab[] = [
//     { label: 'Branding', content: <InizioBranding /> },
//     { label: 'UX/UI Design', content: <InizioDesign /> },
//     { label: 'UI Developer', content: <InizioDevelop /> },
//   ];

//   return (
//     <div>
//       <div className="relative mx-auto border border-[#3E3E3E] rounded-full p-1 bg-[#181C1E] flex flex-row items-center justify-start [perspective:1000px] overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full">
//         <div className="text-gray-500 text-base flex space-x-4 px-8 border-b border-gray-500">
//           {tabs.map((tab, index) => (
//             <div
//               key={index}
//               className={`${
//                 currentTab === index
//                   ? 'bg-gradient-to-r from-[#5465FD] to-[#0DB9B9] rounded-full text-white font-medium'
//                   : 'text-white'
//               } px-5 py-2 cursor-pointer`}
//               onClick={() => setCurrentTab(index)}
//             >
//               {tab.label}
//             </div>
//           ))}
//         </div>
//       </div>

//       <div>
//         {tabs.map((tab, index) => (
//           <div key={index} style={{ display: currentTab === index ? 'block' : 'none' }}>
//             {tab.content}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Tabs;
