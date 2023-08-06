import React from "react";
import styled from "@emotion/styled";
import { IndexContainer, InnerContainer, SignButton } from "./component";
import {
  Button,
  Container,
  ProjectBox,
  Title,
} from "../../../emotion/component";
import test from "../../../../json/test.json";
const Proboard = () => {
  const Inner = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    justify-content: space-between;
    margin-top: 300px;
  `;
  return (
    <>
      <Container>
        <Title>판매자 게시판</Title>
        <IndexContainer>
          <InnerContainer>
            <Inner>
              {test &&
                test.Project.map((project) => (
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
