import styled from 'styled-components';
import bannerImage from '../../../img/main/mainTop.png';


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
export const TopBannerArea = styled.section`
  background: url(${bannerImage}) no-repeat center center;
  position: relative;  
  width: 1920px;
  height: 591px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextContainer = styled.div`
  width: 1089px;
  height: 334px;
  flex-shrink: 0;
  border-radius: 43px;
  background: rgba(255, 255, 255, 0.37);
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
`;

export const Texth2 = styled.h2`
  color: #FFF;
  text-align: center;
  text-shadow: 0px 4px 0px rgba(0, 0, 0, 0.90); 
  font-family: 210 OmniGothic;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 38px; /* 118.75% */
`;

export const Texth1 = styled.h1`
  color: #FFF;
  text-align: center;
  text-shadow: 0px 4px 0px rgba(38, 51, 36, 0.54);
  font-family: 210 OmniGothic;
  font-size: 90px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 22.222% */
`;

export const StyledHr = styled.hr`
  height: 1px;
  border: none;
  width: 1920px;
  height: 35px;
  margin-top:70px;
  background-color: rgba(113, 125, 101, 0.09);
  flex-shrink: 0;
`;

export const RegisterArea = styled.section`
  height: 685px;
  background-color: aqua;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Registertexth2 = styled.h2`
  color: #000;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Inter;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 50% */
  width: 1628px;

`;

export const Registergroup = styled.div`
  width: 1628px;
  height:492px;
  background-color: azure;
  display: flex;
  

`;

export const Registerprovider = styled.div`
  width: 788px;
  height: 492px;
  flex-shrink: 0;
  background-color: #BBEAB7;
`;

export const RegisterSeller = styled.div`
  width: 788px;
  height: 492px;
  flex-shrink: 0;
  background-color: #C0E0EE;
  margin-left: 52px;
`;

