import styled from 'styled-components';
import Speechbubble from '../../../img/questionboard/speechbubble.png';
import Speechbubble2 from '../../../img/questionboard/speechbubble2.png';
import Close from '../../../img/questionboard/closelogo.svg';

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

export const Title = styled.div`
  width: 1650px;
  height: 50px;
  display: flex;
  margin-top: 80px;
  align-items: center;
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
  margin-left: 20px;
`;

export const SubTitle = styled.h2`
  color: #000;
  width: 1650px;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Inter;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 62.5% */
  margin-left: 20px;
  margin-top: 50px;
`;

export const QuestionBox = styled.div`
width: 1650px;
height: 650px;
`; 

export const Question = styled.div`
  width: 1650px;
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
  margin: 50px 0;
  padding: 0 50px;
  display: flex;
  align-items: center;

`;

export const OtherQuestion = styled.div`
  width: 1750px;
  height: 107px;
  background-image: url(${Speechbubble2});
  background-repeat: no-repeat;
  color: #474141;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Inter;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  padding: 0 50px;
  display: flex;
  align-items: center;
`;

export const QuestiondetailBox = styled.div`
width: 1650px;
height: 650px;
`;

export const Questiondetail = styled.div`
  width: 1650px;
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
  margin: 50px 0;
  padding: 0 50px;
  display: flex;
  align-items: center;
`;

export const Answerdetail = styled.div`
  width: 1597px;
  height: 697px;
  flex-shrink: 0;
  border-radius: 5px;
  background: #F8F9E3;
  margin-left: 20px;
  display: flex;
`;

export const AnswerTitle = styled.div`
  width: 1597px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
`;

export const AnswerTitletext = styled.h2`
  color: #414547;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Inter;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 62.5% */
`;

export const AnswerTitleclose = styled.div`
  background-image: url(${Close});
  background-repeat: no-repeat;
  width: 25px;
  height: 25px;
  flex-shrink: 0;
`;

export const AnswerContent = styled.div`

`;