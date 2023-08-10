import React from 'react';

import { Answerdetail, IndexContainer, QuestiondetailBox, Question, SubTitle, Title, TitleText, Titlebar, AnswerTitle, AnswerTitletext, AnswerTitleclose } from './component';
  

const Questiondetail = () => {
  return (
    <IndexContainer>
        <Title>
            <Titlebar></Titlebar>
            <TitleText>고객 문의</TitleText>
        </Title>
        <SubTitle>자주 묻는 질문</SubTitle>
        <QuestiondetailBox>
            <Question>
            Q. 질문 내용
            </Question>
            <Answerdetail>
                <AnswerTitle>
                    <AnswerTitletext>
                        A. 답변 내용
                    </AnswerTitletext>
                    <AnswerTitleclose></AnswerTitleclose>
                </AnswerTitle>
            </Answerdetail>
        </QuestiondetailBox>

    </IndexContainer>
  );
}

export default Questiondetail;
