import React from "react";
import styled from "@emotion/styled";
import {
  InnerContainer,
  Inners,
  SignTitle,
  InputContainer,
  SignButton,
  SignInput,
  Cblock,
  CheckContainer,
} from "../../../emotion/component";
import { Link } from "react-router-dom";
const Findid = () => {
  return (
    <>
      <Inners>
        <CheckContainer>
          <Link to="/findid">
            <Cblock width="10rem" background="#A1D99D" color="#F8F9E3">
              아이디 찾기
            </Cblock>
          </Link>
          <Link to="/findpass">
            <Cblock width="10rem" background="#E1F0DF" color="#76C56F">
              비밀번호 찾기
            </Cblock>
          </Link>
        </CheckContainer>
        <InnerContainer width={"50rem"}>
          <SignTitle>비밀번호 찾기</SignTitle>
          <InputContainer>
            <SignInput placeholder="아이디를 입력하세요" />
            <SignInput placeholder="이름을 입력하세요" />
            <SignInput placeholder="가입시 입력한 휴대폰 번호를 입력하세요" />
            <SignButton>아이디 찾기</SignButton>
          </InputContainer>
        </InnerContainer>
      </Inners>
    </>
  );
};

export default Findid;
