import React from "react";
import { 
  IndexContainer, TextContainer, TopBannerArea, Texth2, Texth1, 
  StyledHr, RegisterArea, Registertexth2, Registergroup, RegisterSeller, Registerprovider

} from './component';

const Main = () => {
  return (
    <IndexContainer>
      <TopBannerArea>
        <TextContainer>
          <Texth2>
            온라인 입점이 어려운 농산물 공급자를 도와주는 중개 서비스
          </Texth2>
          <Texth1>
            팜투마켓
          </Texth1>
        </TextContainer>
      </TopBannerArea>
      <StyledHr />
      <RegisterArea>
        <Registertexth2>간단하게 온라인 등록하기!</Registertexth2>
        <Registergroup>
          <Registerprovider>

          </Registerprovider>
          <RegisterSeller>
            
          </RegisterSeller>

        </Registergroup>
      </RegisterArea>
      <StyledHr />
    </IndexContainer>
  );
};

export default Main;
