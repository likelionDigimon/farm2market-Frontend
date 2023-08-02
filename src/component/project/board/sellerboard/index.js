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
import test from "../../../../json/test.json";

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
      </Container>
    </>
  );
};

export default Proboard;
