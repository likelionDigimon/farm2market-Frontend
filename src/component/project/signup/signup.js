import React from "react";
import styled from "@emotion/styled";
import { IndexContainer, InnerContainer, SignButton } from "./component";
import { ProjectBox } from "../../emotion/component";
const Signup = () => {
  const SignupTitle = styled.div`
    color: #fff;
    font-feature-settings: "clig" off, "liga" off;
    font-family: Inter;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: 26.5px; /* 82.813% */
    margin-bottom: 58px;
  `;
  const Inner = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center; /* 세로 중앙 정렬 */
    flex-direction: column;
  `;

  const SignupInput = styled.input`
    color: #000;
    width: 636px;
    border-radius: 10px;
    border: 0px;
    padding: 26px 40px;
    font-feature-settings: "clig" off, "liga" off;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
    margin-bottom: 16px;

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
          <SignupTitle>회원가입</SignupTitle>
          <Inner>
            <SignupInput placeholder="사용할 아이디를 입력하세요" />
            <SignupInput placeholder="사용할 비밀번호를 입력하세요" />
            <SignupInput placeholder="이름을 입력하세요" />
            <SignupInput placeholder="휴대폰 번호를 입력하세요" />
            <SignButton>가입하기</SignButton>
          </Inner>
        </InnerContainer>
      </IndexContainer>
    </>
  );
};

export default Signup;
