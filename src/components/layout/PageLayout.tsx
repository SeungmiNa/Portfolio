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
      <header>
        <title>{title}</title>
        <meta name="description" content="Seungmi Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </header>
      <div className="min-h-full bg-[#F4F4F5]">
        <Navbar />
        <main
          className={`mx-auto max-w-9xl sm:px-6 lg:px-8 h-full ${defaultClass}`}
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