import React from 'react';

import { IndexContainer, OtherQuestion, Question, QuestionBox, SubTitle, Title, TitleText, Titlebar } from './component';
  

const questionBoard = () => {
  return (
    <IndexContainer>
        <Title>
            <Titlebar></Titlebar>
            <TitleText>고객 문의</TitleText>
        </Title>
        <SubTitle>자주 묻는 질문</SubTitle>
        <QuestionBox>
            <Question>Q. 질문 내용</Question>
            <Question>Q. 질문 내용</Question>
            <Question>Q. 질문 내용</Question>
            <Question>Q. 질문 내용</Question>
            <OtherQuestion>이 외에 다른 질문을 하고 싶나요?</OtherQuestion>
        </QuestionBox>

    </IndexContainer>
  );
}

export default questionBoard;
