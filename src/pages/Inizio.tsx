import React from "react";
import PageLayout from "../components/layout/PageLayout";

interface MainProps {
  defaultClassName?: string;
}

const Inizio: React.FC<MainProps> = ({ defaultClassName }) => {
  const MainPage = () => {
    return (
      <>
        <div className={defaultClassName}>
          <div>왜 안나오는 걸 가</div>
          <div>뭐야 왜 안나와?</div>
        </div>
      </>
    );
  };

  return (
    <PageLayout content={MainPage()}>{/* 'children' 대신 'content' 속성을 사용합니다. */}
    </PageLayout>
  );
};

export default Inizio;

