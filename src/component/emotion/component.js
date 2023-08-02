/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { ReactNode } from "react";
import theme from "../../styles/theme";
import styled from "@emotion/styled";

const StyledProjectBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  color: #ffffff;
  padding: 1.6rem 2.1rem;
  width: 37rem;
  height: 39.5rem;
  background: #212121;
  border-radius: 1.9rem;
  margin: 0;
`;
const StyledProjectTag = styled.div`
  display: flex;
  flex-direction: row;
`;
const StyledTag = styled.div`
  border-radius: 0.5rem;
  background: #4f85e8;
  padding: 0.6rem 1rem;
  margin: 0 0.9rem 0.9rem 0;
  color: #fff;
  font-family: Pretendard;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.42px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyledTitle = styled.h2`
  color: #fff;
  font-family: Pretendard;
  font-size: 1.5625em;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.75px;
  margin-bottom: 0.625em;
`;
const StyledText = styled.p`
  color: #fff;
  font-family: Pretendard;
  font-size: 1em;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.48px;
`;

export const ProjectBox = ({ title, content }) => {
  return (
    <StyledProjectBox title={title} content={content}>
      <img
        src="https://i.ibb.co/yktPkxP/image-5.png"
        alt="Project"
        className="project-image"
        style={{
          width: "20.5625em",
          height: "14.0625em",
          borderRadius: "0.625em",
          marginBottom: "1em",
        }}
      />
      <StyledTitle>{title}</StyledTitle>
      <StyledText>{content}</StyledText>
    </StyledProjectBox>
  );
};

<<<<<<< Updated upstream
export { ProjectBox };

export const IndexContainer = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-content: center;
  width: 1920px;
  height: 100vh;
`;
=======
export const Rowplace = ({ children }) => (
  <div
    css={css`
      display: flex;
      flex-direction: row;
    `}
  >
    {children}
  </div>
);

const SvgWithMargin = () => {
  return (
    <div style={{ marginTop: "60px" }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="192"
        height="192"
        viewBox="0 0 192 192"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M176 96C176 140.182 140.182 176 96 176C51.8172 176 16 140.182 16 96C16 51.8172 51.8172 16 96 16C140.182 16 176 51.8172 176 96ZM120 72C120 85.2552 109.255 96 96 96C82.7448 96 72 85.2552 72 72C72 58.7452 82.7448 48 96 48C109.255 48 120 58.7452 120 72ZM96 164C110.272 164 123.518 159.603 134.455 152.09C139.286 148.771 141.35 142.45 138.542 137.306C132.72 126.642 120.722 120 95.9992 120C71.2775 120 59.2798 126.642 53.4571 137.306C50.6484 142.45 52.7128 148.77 57.5437 152.089C68.4814 159.602 81.7272 164 96 164Z"
          fill="white"
        />
      </svg>
    </div>
  );
};

export default SvgWithMargin;
>>>>>>> Stashed changes
