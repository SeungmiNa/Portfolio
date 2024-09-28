import React, { FC, ReactNode } from "react";
import Navbar from "../navbar/Navbar";

interface pageLayoutProps {
  defaultClass?: string;
  title?: string;
  content?: any;
}

const PageLayout: React.FC<pageLayoutProps> = ({
  defaultClass,
  title,
  content,
}) => {
  return (
    <>
      <div className="h-full flex-1">
        {/* <Navbar defaultClass="sticky top-0"/> */}
        <main
          className={`mx-auto overflow-hidden flex-1 w-full bg-blue-200 sm:px-6 lg:px-8 h-full overflow-y-auto ${defaultClass}`}
        >
          {content}
        </main>
      </div>
    </>
  );
};

export default PageLayout;

// (ProjectMarketResearch as any).getLayout = (page: any) => {
//   return (
//     <BasicLayout>
//       <ProjectDetailLayout>{page}</ProjectDetailLayout>
//     </BasicLayout>
//   );
// };
