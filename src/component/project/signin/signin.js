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
import { Nav, NavItem } from "../header/component";
import { Link } from "react-router-dom";

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
          <Nav>
            <NavItem as={Link} to="/proboard">
              <SignButton>로그인</SignButton>
            </NavItem>
          </Nav>

          <Signcheck>
            <Link
              to="/signup"
              style={{ textDecoration: "none", color: "white" }}
            >
              회원가입
            </Link>
            <Link
              to="/findid"
              style={{ textDecoration: "none", color: "white" }}
            >
              아이디/비밀번호 찾기
            </Link>
          </Signcheck>
        </InnerContainer>
      </IndexContainer>
    </>
  );
};
export default Mypage;
