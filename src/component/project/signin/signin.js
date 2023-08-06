import React from "react";
import styled from "@emotion/styled";
import {
  IndexContainer,
  InnerContainer,
  SignButton,
  SignTitle,
  Signcheck,
  SignsecP,
  InputId,
  InputPass,
} from "./component";

const Mypage = () => {
  return (
    <>
      <IndexContainer>
        <InnerContainer>
          <SignTitle>Farm2Market</SignTitle>
          <SignsecP>로그인</SignsecP>
          <form>
            <InputId placeholder="아이디를 입력해주세요" />
            <InputPass placeholder="비밀번호를 입력해주세요" />
          </form>
          <SignButton>로그인</SignButton>
          <Signcheck>
            <p>회원가입</p>
            <p>아이디/ 비밀 번호 찾기</p>
          </Signcheck>
        </InnerContainer>
      </IndexContainer>
    </>
  );
};
export default Mypage;
