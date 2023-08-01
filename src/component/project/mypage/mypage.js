import React from "react";
import {
  InnerContainer,
  BackgroundContainer,
  Title,
  LeftContainer,
  RightContainer,
} from "./component";
import styled from "@emotion/styled";

const Mypage = () => {
  return (
    <>
      <BackgroundContainer>
        <Title>마이페이지</Title>
        <InnerContainer>
          <LeftContainer></LeftContainer>
          <RightContainer></RightContainer>
        </InnerContainer>
      </BackgroundContainer>
    </>
  );
};
export default Mypage;
