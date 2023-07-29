import React from "react";
import styled from "@emotion/styled";
import { IndexContainer, InnerContainer, SignButton } from "./component";
const Proboard = () => {
  const Inner = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 300px;
  `;
  const SignupInput = styled.input`
    color: #000;
    width: 294px;
    height: 388px;
    border-radius: 10px;
    border: 0px;
    padding: 20px;
    font-feature-settings: "clig" off, "liga" off;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
    margin-bottom: 16px;
    background: #d9d9d9;
    ::placeholder {
      color: lightgray;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
    }
  `;
  return (
    <>
      <IndexContainer>
        <InnerContainer>
          <h1>판매자 게시판</h1>
          <Inner>
            <SignupInput placeholder="사용할 아이디를 입력하세요" />
            <SignupInput placeholder="사용할 비밀번호를 입력하세요" />
            <SignupInput placeholder="이름을 입력하세요" />
            <SignupInput placeholder="휴대폰 번호를 입력하세요" />
            <SignupInput placeholder="사용할 아이디를 입력하세요" />
            <SignupInput placeholder="사용할 비밀번호를 입력하세요" />
            <SignupInput placeholder="이름을 입력하세요" />
            <SignupInput placeholder="휴대폰 번호를 입력하세요" />
          </Inner>
        </InnerContainer>
      </IndexContainer>
    </>
  );
};

export default Proboard;
