import React, { useState } from 'react';
import { IndexContainer, OtherQuestion, Question, QuestionBox, SubTitle, Title, TitleText, Titlebar } from './component';
import questionsData from '../../../json/questio.json';

const ITEMS_PER_PAGE = 4;

const QuestionBoard = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(questionsData.Project.length / ITEMS_PER_PAGE);
  
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const displayedData = questionsData.Project.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <IndexContainer>
        <Title>
            <Titlebar></Titlebar>
            <TitleText>고객 문의</TitleText>
        </Title>
        <SubTitle>자주 묻는 질문</SubTitle>
        <QuestionBox>
          {displayedData.map((question, index) => (
            <Question key={index}>Q. {question.title}</Question>
          ))}
          <OtherQuestion>이 외에 다른 질문을 하고 싶나요?</OtherQuestion>
        </QuestionBox>
        <div>
          {currentPage > 1 && <button onClick={handlePreviousPage}>이전</button>}
          {currentPage < totalPages && <button onClick={handleNextPage}>다음</button>}
        </div>
    </IndexContainer>
  );
}

export default QuestionBoard;
