import styled from 'styled-components';

export const IndexContainer = styled.div`
  width: 1920px;
  background-color: #fff;
  position: relative;
  margin: 0 auto;
  display: flex;
  justify-content: center; 
  align-items: center; 
  flex-direction: column;
`;


export const WritingArea = styled.section`
    width: 1620px;
    height: 997px;
    flex-shrink: 0;
    display: flex;
    margin-top: 150px;
`;

export const Input = styled.div`
    width: 620px;
    height: 997px;
    background: #CAE9C7;
    display: flex;
`;

export const Output = styled.div`
    width: 999px;
    height: 997px;
    background-color: #F1F6F1;
    display: felx;
`;

export const InputH1 = styled.h1`
    color: #000;
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px; /* 83.333% */
`; 

export const InputSpan = styled.span`
    color: #000;
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 31.5px;
`;

export const InputProductBox = styled.div`
    width: 473px;
    height: 90px;
    flex-shrink: 0;
    display: flex;
`;

export const InputProductH2 = styled.h2`
    color: #000;
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 100% */
`;

export const InputProduct = styled.input`
    width: 473px;
    height: 51px;
    flex-shrink: 0;
    border-radius: 5px;
    background: #FFF;
`;