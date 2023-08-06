import styled from 'styled-components';

export const AIWritingWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
`;

export const WritingAreaWrapper = styled.div`
  margin-bottom: 20px;

  textarea {
    width: 100%;
    height: 200px;
    padding: 10px;
    box-sizing: border-box;
    font-size: 16px;
    margin-bottom: 10px;
  }

  button {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
  }
`;

export const ArticleListWrapper = styled.div`
  border-top: 1px solid #ccc;
  padding-top: 20px;

  article {
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;
    margin-bottom: 10px;
  }
`;
