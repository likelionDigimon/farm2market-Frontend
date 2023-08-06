/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import styled from "@emotion/styled";
import { Link } from "react-router-dom";

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

const StyledProjectBox2 = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 20px;
  padding-bottom: 0px;
  color: #000;
  width: 294px;
  height: 408px;
  border-radius: 10px;
  margin: 0;
  img.project-image {
    width: 294px;
    height: 18.0625em;
    border-radius: 0.625em;
    margin-bottom: em;
  }
`;

const StyledTitle2 = styled.h2`
  font-family: "Pretendard";
  color: #000;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin-top: 0.25em;
`;

const StyledText2 = styled.p`
  font-family: "Pretendard";
  color: #000;
  font-feature-settings: "clig" off, "liga" off;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  margin-top: 0.25em;
`;
const StyledText3 = styled.span`
  font-family: "Pretendard";
  color: #76c56f;
  font-feature-settings: "clig" off, "liga" off;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  margin-left: 10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  svg {
    margin-left: 10px;
  }
`;
const StyledText4 = styled.span`
  font-family: "Pretendard";
  color: #96c6e1;
  font-feature-settings: "clig" off, "liga" off;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;
/**
 * Projectbox 컴포넌트
 * @component ProjectBox2
 * @param {string} title - 프로젝트 제목
 * @param {string} content - 프로젝트 내용
 * @param {string[]} tags - 프로젝트 태그들의 배열
 */
export const ProjectBox2 = ({ title, content, imageSrc }) => {
  return (
    <StyledProjectBox2 title={title} content={content}>
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
      <StyledTitle2>{title}</StyledTitle2>
      <StyledText2>
        {content.length > 39 ? content.substring(0, 39) + "..." : content}
        <StyledText3>
          0.1 %{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="19"
            viewBox="0 0 21 19"
            fill="none"
          >
            <path
              d="M8.76795 1C9.53775 -0.333334 11.4623 -0.333333 12.2321 1L20.4593 15.25C21.2291 16.5833 20.2668 18.25 18.7272 18.25H2.27276C0.733157 18.25 -0.229093 16.5833 0.540708 15.25L8.76795 1Z"
              fill="#76C56F"
            />
          </svg>
        </StyledText3>
      </StyledText2>
    </StyledProjectBox2>
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
  margin-top: 80px;
  display: inline-flex;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-right: 147px;
  margin-top: 80px;
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
  margin-right: 10px;
  svg {
    margin-right: 10px;
  }
`;

export const Inner = styled.div`
  width: 100%;
  display: flex;
  gap: 80px;
  flex-wrap: wrap;
  margin-top: 300px;
`;
export const FootContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 350px;
  margin-bottom: 200px;
`;

export const StyledLinkNavItem = styled(Link)`
  display: inline-block;
  p {
    margin: 0;
  }
`;
