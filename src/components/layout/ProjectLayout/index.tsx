import React from "react";
import Navbar from "../../navbar/Navbar";

type ProjectLayoutProps = {
  content?: any;
  defaultClass?: string;
}

const ProjectLayout: React.FC<ProjectLayoutProps> = ({content, defaultClass}) => {
  return (
    <>
      {/* <header>
        <Navbar />
      </header> */}
      <div className={`${defaultClass} `}>{content()}</div>
    </>
  );
};

export default ProjectLayout;

