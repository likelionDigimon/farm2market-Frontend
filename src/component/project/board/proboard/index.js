import React from "react";
import styled from "@emotion/styled";
import { IndexContainer, InnerContainer, SignButton } from "./component";
import { Container, ProjectBox, Title } from "../../../emotion/component";
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
  const SignupInput = styled.input`
    color: #000;
    width: 294px;
    height: 388px;
    border-radius: 10px;
    border: 0px;
    padding: 20px;
    font-feature-settings: "clig" off, "liga" off;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
    margin-bottom: 16px;
    background: #d9d9d9;
    ::placeholder {
      color: lightgray;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
    }
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
      </Container>
    </>
  );
};

export default Proboard;
