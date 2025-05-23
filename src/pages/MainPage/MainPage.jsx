import React from "react";
import TabBar from "../../components/TabBar/TabBar";
import PercentBar from "../../components/PercentBar/PercentBar";

const MainPage = () => {
  return (
    <div>
      <PercentBar type="songil" percent={70} />
      <TabBar type="songil" index={1} />
    </div>
  );
};

export default MainPage;
