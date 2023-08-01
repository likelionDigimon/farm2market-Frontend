/** @jsxImportSource @emotion/react */
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

const ProjectBox = ({ title, content }) => {
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

export { ProjectBox };

export const IndexContainer = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-content: center;
  width: 1920px;
  height: 100vh;
`;
