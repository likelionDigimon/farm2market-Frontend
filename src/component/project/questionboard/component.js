import styled from 'styled-components';
import Speechbubble from '../../../img/questionboard/speechbubble.png';
import Speechbubble2 from '../../../img/questionboard/speechbubble2.png';

export const IndexContainer = styled.div`
  width: 1920px;
  background-color: #fff;
  position: relative;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
`;

export const Title = styled.div`
    width: 400px;
    height: 50px;
    display: flex;
`;

export const Titlebar = styled.div`
width: 5px;
height: 42px;
background: #000;
`;

export const TitleText = styled.h1`
color: #000;
font-feature-settings: 'clig' off, 'liga' off;
font-family: Inter;
font-size: 36px;
font-style: normal;
font-weight: 600;
line-height: 20px; /* 55.556% */
`;

export const SubTitle = styled.h2`
color: #000;
font-feature-settings: 'clig' off, 'liga' off;
font-family: Inter;
font-size: 32px;
font-style: normal;
font-weight: 600;
line-height: 20px; /* 62.5% */
`;

export const QuestionBox = styled.div`
width: 1650px;
height: 650px;
`;

export const Question = styled.div`
width: 1597px;
height: 107px;
background-image: url(${Speechbubble});
background-repeat: no-repeat;
color: #474141;
font-feature-settings: 'clig' off, 'liga' off;
font-family: Inter;
font-size: 32px;
font-style: normal;
font-weight: 600;
line-height: 20px; /* 62.5% */
`;

export const OtherQuestion = styled.div`
width: 1597px;
height: 107px;
background-image: url(${Speechbubble2});
background-repeat: no-repeat;
color: #474141;
font-feature-settings: 'clig' off, 'liga' off;
font-family: Inter;
font-size: 32px;
font-style: normal;
font-weight: 600;
line-height: 20px; /* 62.5% */
`;