import React from "react";
import styled from "@emotion/styled";
import { IndexContainer, InnerContainer, SignButton } from "./component";
import {
  Container,
  ProjectBox,
  Title,
  ButtonContainer,
  Button,
} from "../../../emotion/component";
import test2 from "../../../../json/test2.json";

const Proboard = () => {
  const OuterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
  `;

  const Inner = styled.div`
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    justify-content: space-between;
    margin-top: 300px;
  `;

  return (
    <>
      <Container>
        <OuterContainer>
          <Title>공급자 게시판</Title>
          <ButtonContainer>
            <Button>글쓰기</Button>
            <Button>내가쓴글</Button>
          </ButtonContainer>
        </OuterContainer>
        <IndexContainer>
          <InnerContainer>
            <Inner>
              {test2 &&
                test2.Project.map((project) => (
                  <ProjectBox
                    key={project.id}
                    title={project.title}
                    content={project.content}
                    tags={project.tags}
                    imageSrc={project.imageSrc}
                  />
                ))}
            </Inner>
          </InnerContainer>
        </IndexContainer>
        <Button>
          다음페이지
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M15.8351 11.6296L9.20467 5.1999C8.79094 4.79869 8 5.04189 8 5.5703V18.4297C8 18.9581 8.79094 19.2013 9.20467 18.8001L15.8351 12.3704C16.055 12.1573 16.0549 11.8427 15.8351 11.6296Z"
              fill="white"
            />
          </svg>
        </Button>
      </Container>
    </>
  );
};

export default Proboard;
