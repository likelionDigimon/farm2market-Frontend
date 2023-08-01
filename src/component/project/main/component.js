import styled from 'styled-components';


// Container는 전체 페이지를 커버하며 폭이 1920px입니다.
export const IndexContainer = styled.div`
  width: 1920px;
  margin: 0 auto;
  background-color: #fff;
  position: relative;
  display: flex;
  justify-content: center;
  align-content: center;
`;

// TextContainer는 텍스트를 담당하며, 배경 이미지의 중앙에 위치합니다.
export const TextContainer = styled.div`
color: #FFF;
text-align: center;
font-feature-settings: 'clig' off, 'liga' off;
text-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.30);
font-family: 210 OmniGothic;
font-size: 32px;
font-style: normal;
font-weight: 400;
line-height: 38px; /* 118.75% */ 
`;
