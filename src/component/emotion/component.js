/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { ReactNode } from "react";
import theme from "../../styles/theme";
import styled from "@emotion/styled";

const StyledProjectBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 20px;
  padding-bottom: 0px;
  color: #000;
  width: 294px;
  height: 408px;
  border-radius: 10px;
  background: #f4f7f3;
  margin: 0;
  img.project-image {
    width: 294px;
    height: 18.0625em;
    border-radius: 0.625em;
    margin-bottom: 1em;
  }
`;

const StyledProjectTag = styled.div`
  display: flex;
  flex-direction: row;
  margin: 5px 5px;
`;

const StyledTag = styled.div`
  border-radius: 10px;
  background: #76c56f;
  padding: 10px 10px;
  margin: 0 0.9rem 0.9rem 0;
  color: #fff;
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Inter;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledTitle = styled.h2`
  color: #000;
  font-family: "Pretendard";
  font-size: 1.5625em;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.75px;
  margin: 0px 10px;
`;

const StyledText = styled.p`
  color: #000;
  font-family: "Pretendard";
  font-size: 1em;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.48px;
  margin: 5px 10px;
`;

/**
 * Projectbox 컴포넌트
 * @component ProjectBox
 * @param {string} title - 프로젝트 제목
 * @param {string} content - 프로젝트 내용
 * @param {string[]} tags - 프로젝트 태그들의 배열
 */
export const ProjectBox = ({ title, content, tags = [], imageSrc }) => {
  const generatedTags = tags.length === 0 ? ["임의 태그"] : tags;
  return (
    <StyledProjectBox title={title} content={content} tags={tags}>
      <img
        src={imageSrc} // 이미지 경로 설정
        alt="Project"
        className="project-image"
        style={{
          width: "294px",
          height: "18.0625em",
          borderRadius: "0.625em",
          marginBottom: "1em",
        }}
      />

      <StyledTitle>{title}</StyledTitle>
      <StyledText>
        {content.length > 39 ? content.substring(0, 39) + "..." : content}
      </StyledText>
      {generatedTags && (
        <StyledProjectTag>
          {generatedTags.map((tag) => (
            <StyledTag key={tag}>{tag}</StyledTag>
          ))}
        </StyledProjectTag>
      )}
    </StyledProjectBox>
  );
};

export const IndexContainer = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-content: center;
  width: 1920px;
  height: 100vh;
`;
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

export const Container = styled.div`
  background-color: #fff;
  display: flex;
  width: 1920px;
  height: 100vh;
  flex-direction: column;
  overflow-y: auto;
`;

export const Title = styled.div`
  color: #000;
  font-feature-settings: "clig" off, "liga" off;
  font-family: 210 OmniGothic;
  font-size: 36px;
  font-style: normal;
  font-weight: 900;
  line-height: 1.2; /* 55.556% */
  border-left: 5px black solid;
  padding-left: 20px;
  margin-left: 147px;
  margin-top: 120px;
  display: inline-flex;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-right: 147px;
  margin-top: 120px;
`;

export const Button = styled.div`
  width: 147px;
  height: 41px;
  border-radius: 57px;
  background: #76c56f;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  cursor: pointer;
`;
