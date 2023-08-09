import React from "react";
import styled from "@emotion/styled";
import { IndexContainer, InnerContainer, SignButton } from "./component";
import theme from "../../../styles/theme";
import { SignTitle } from "../../emotion/component";

const Signup = () => {
  const Inner = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
  `;

  const SignupInput = styled.input`
    color: #000;
    width: 636px;
    border-radius: 10px;
    border: 0px;
    padding: 26px 40px;
    margin-bottom: 16px;
    ${theme.textVariants.body5_bold}

    ::placeholder {
      border: 0px;
      color: lightgray;
      ${theme.textVariants.body5_bold}
    }
  `;
  return (
    <>
      <IndexContainer>
        <InnerContainer>
          <SignTitle>회원가입</SignTitle>
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
