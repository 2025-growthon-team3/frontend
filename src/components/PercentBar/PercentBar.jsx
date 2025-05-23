import React from "react";
import * as P from "./PercentBar.style";

const PercentBar = ({ type, percent }) => {
  return (
    <P.Container>
      <P.Title>{type === "songil" ? "봉사온도" : "기관 매칭률"}</P.Title>
      <P.PercentContainer>
        <P.PercentBar $percent={percent} $type={type}>
          {percent}
          {type === "songil" ? "º" : "%"}
        </P.PercentBar>
        <P.MaxPercent>99{type === "songil" ? "º" : "%"}</P.MaxPercent>
      </P.PercentContainer>
    </P.Container>
  );
};

export default PercentBar;
