import React from "react";
import {
  InnerContainer,
  BackgroundContainer,
  Title,
  LeftContainer,
<<<<<<< Updated upstream
  RightContainer,
} from "./component";
import styled from "@emotion/styled";
=======
  CustomRightContainer,
  TopSection,
  ContentWrapper,
  BottomSection,
  SideContent,
  Pagebox,
  Mytitle,
  PageboxText,
  Usertitle,
  Mybutton,
  MyLoge,
} from "./component";
import SvgWithMargin, { Rowplace } from "../../emotion/component";
>>>>>>> Stashed changes

const Mypage = () => {
  return (
    <>
      <BackgroundContainer>
        <Title>마이페이지</Title>
        <InnerContainer>
<<<<<<< Updated upstream
          <LeftContainer></LeftContainer>
          <RightContainer></RightContainer>
=======
          <LeftContainer>
            <SvgWithMargin />
            <Usertitle>ㅇㅇㅇ 님</Usertitle>
            <p>농산물 공급자 회원</p>
            <Mybutton>개인 정보 수정</Mybutton>
            <Mybutton>로그아웃</Mybutton>
          </LeftContainer>
          <CustomRightContainer>
            <TopSection>
              <Mytitle>나의 활동</Mytitle>
              <Rowplace>
                <Pagebox>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="160"
                    height="160"
                    viewBox="0 0 160 160"
                    fill="none"
                  >
                    <circle cx="80" cy="80" r="80" fill="#76C56F" />

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="73"
                      height="73"
                      viewBox="0 0 73 73"
                      fill="none"
                      x="43.5" // 중앙 가로 위치 조정
                      y="43.5" // 중앙 세로 위치 조정
                      transform="translate(-36.5, -36.5)" // 중앙으로 이동
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.6885 9.64687C9.125 13.2104 9.125 18.9458 9.125 30.4167V42.5833C9.125 54.0541 9.125 59.7897 12.6885 63.3531C16.2521 66.9167 21.9875 66.9167 33.4583 66.9167H39.5417C51.0124 66.9167 56.7481 66.9167 60.3114 63.3531C63.875 59.7897 63.875 54.0541 63.875 42.5833V30.4167C63.875 18.9458 63.875 13.2104 60.3114 9.64687C56.7481 6.08334 51.0124 6.08334 39.5417 6.08334H33.4583C21.9875 6.08334 16.2521 6.08334 12.6885 9.64687ZM22.0521 24.3333C22.0521 23.0735 23.0734 22.0521 24.3333 22.0521H48.6667C49.9265 22.0521 50.9479 23.0735 50.9479 24.3333C50.9479 25.5932 49.9265 26.6146 48.6667 26.6146H24.3333C23.0734 26.6146 22.0521 25.5932 22.0521 24.3333ZM22.0521 36.5C22.0521 35.2402 23.0734 34.2188 24.3333 34.2188H48.6667C49.9265 34.2188 50.9479 35.2402 50.9479 36.5C50.9479 37.7599 49.9265 38.7813 48.6667 38.7813H24.3333C23.0734 38.7813 22.0521 37.7599 22.0521 36.5ZM24.3333 46.3854C23.0734 46.3854 22.0521 47.4068 22.0521 48.6667C22.0521 49.9265 23.0734 50.9479 24.3333 50.9479H39.5417C40.8015 50.9479 41.8229 49.9265 41.8229 48.6667C41.8229 47.4068 40.8015 46.3854 39.5417 46.3854H24.3333Z"
                        fill="white"
                      />
                    </svg>
                  </svg>

                  <p>내 개시물</p>
                  <PageboxText>0 개</PageboxText>
                </Pagebox>
                <Pagebox>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="160"
                    height="160"
                    viewBox="0 0 160 160"
                    fill="none"
                  >
                    <circle cx="80" cy="80" r="80" fill="#76C56F" />

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="73"
                      height="73"
                      viewBox="0 0 73 73"
                      fill="none"
                      x="43.5" // 중앙 가로 위치 조정
                      y="43.5" // 중앙 세로 위치 조정
                      transform="translate(-36.5, -36.5)" // 중앙으로 이동
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.6885 9.64687C9.125 13.2104 9.125 18.9458 9.125 30.4167V42.5833C9.125 54.0541 9.125 59.7897 12.6885 63.3531C16.2521 66.9167 21.9875 66.9167 33.4583 66.9167H39.5417C51.0124 66.9167 56.7481 66.9167 60.3114 63.3531C63.875 59.7897 63.875 54.0541 63.875 42.5833V30.4167C63.875 18.9458 63.875 13.2104 60.3114 9.64687C56.7481 6.08334 51.0124 6.08334 39.5417 6.08334H33.4583C21.9875 6.08334 16.2521 6.08334 12.6885 9.64687ZM22.0521 24.3333C22.0521 23.0735 23.0734 22.0521 24.3333 22.0521H48.6667C49.9265 22.0521 50.9479 23.0735 50.9479 24.3333C50.9479 25.5932 49.9265 26.6146 48.6667 26.6146H24.3333C23.0734 26.6146 22.0521 25.5932 22.0521 24.3333ZM22.0521 36.5C22.0521 35.2402 23.0734 34.2188 24.3333 34.2188H48.6667C49.9265 34.2188 50.9479 35.2402 50.9479 36.5C50.9479 37.7599 49.9265 38.7813 48.6667 38.7813H24.3333C23.0734 38.7813 22.0521 37.7599 22.0521 36.5ZM24.3333 46.3854C23.0734 46.3854 22.0521 47.4068 22.0521 48.6667C22.0521 49.9265 23.0734 50.9479 24.3333 50.9479H39.5417C40.8015 50.9479 41.8229 49.9265 41.8229 48.6667C41.8229 47.4068 40.8015 46.3854 39.5417 46.3854H24.3333Z"
                        fill="white"
                      />
                    </svg>
                  </svg>

                  <p>관심 게시물</p>
                  <PageboxText>0 개</PageboxText>
                </Pagebox>
                <Pagebox>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="160"
                    height="160"
                    viewBox="0 0 160 160"
                    fill="none"
                  >
                    <circle cx="80" cy="80" r="80" fill="#76C56F" />

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="73"
                      height="73"
                      viewBox="0 0 73 73"
                      fill="none"
                      x="43.5" // 중앙 가로 위치 조정
                      y="43.5" // 중앙 세로 위치 조정
                      transform="translate(-36.5, -36.5)" // 중앙으로 이동
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.6885 9.64687C9.125 13.2104 9.125 18.9458 9.125 30.4167V42.5833C9.125 54.0541 9.125 59.7897 12.6885 63.3531C16.2521 66.9167 21.9875 66.9167 33.4583 66.9167H39.5417C51.0124 66.9167 56.7481 66.9167 60.3114 63.3531C63.875 59.7897 63.875 54.0541 63.875 42.5833V30.4167C63.875 18.9458 63.875 13.2104 60.3114 9.64687C56.7481 6.08334 51.0124 6.08334 39.5417 6.08334H33.4583C21.9875 6.08334 16.2521 6.08334 12.6885 9.64687ZM22.0521 24.3333C22.0521 23.0735 23.0734 22.0521 24.3333 22.0521H48.6667C49.9265 22.0521 50.9479 23.0735 50.9479 24.3333C50.9479 25.5932 49.9265 26.6146 48.6667 26.6146H24.3333C23.0734 26.6146 22.0521 25.5932 22.0521 24.3333ZM22.0521 36.5C22.0521 35.2402 23.0734 34.2188 24.3333 34.2188H48.6667C49.9265 34.2188 50.9479 35.2402 50.9479 36.5C50.9479 37.7599 49.9265 38.7813 48.6667 38.7813H24.3333C23.0734 38.7813 22.0521 37.7599 22.0521 36.5ZM24.3333 46.3854C23.0734 46.3854 22.0521 47.4068 22.0521 48.6667C22.0521 49.9265 23.0734 50.9479 24.3333 50.9479H39.5417C40.8015 50.9479 41.8229 49.9265 41.8229 48.6667C41.8229 47.4068 40.8015 46.3854 39.5417 46.3854H24.3333Z"
                        fill="white"
                      />
                    </svg>
                  </svg>

                  <p>매칭 횟수</p>
                  <PageboxText>0 번</PageboxText>
                </Pagebox>
              </Rowplace>
            </TopSection>
            <BottomSection>
              <SideContent>
                온라인 입점이 어려운 농산물 공급자를 도와주는 중개 서비스
                <MyLoge>팜투마켓</MyLoge>
              </SideContent>
            </BottomSection>
          </CustomRightContainer>
>>>>>>> Stashed changes
        </InnerContainer>
      </BackgroundContainer>
    </>
  );
};
export default Mypage;
