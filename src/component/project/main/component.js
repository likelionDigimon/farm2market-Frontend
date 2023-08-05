import styled from 'styled-components';
import bannerImg from '../../../img/main/mainTop.png';
import ProviderImg from '../../../img/main/BoardLinkprovider.svg';
import SellerImg from '../../../img/main/BoardLinkSeller.svg';
import BoardLink02TalkImg01 from '../../../img/main/BoardLinkTalk01.png';
import BoardLink02TalkImg02 from '../../../img/main/BoardLinkTalk02.png';
import AIlogo from '../../../img/main/AIimg.png';
import Match from '../../../img/main/Matching.png';



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
  background: url(${bannerImg}) no-repeat center center;
  position: relative;  
  width: 1920px;
  height: 591px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;
`;

export const TextContainer = styled.div`
  width: 1089px;
  height: 334px;
  flex-shrink: 0;
  boarder-radius: 43px;
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
  boarder: none;
  width: 1920px;
  height: 35px;
  margin-top:70px;
  background-color: rgba(113, 125, 101, 0.09);
  flex-shrink: 0;
`;

export const BoardLinkArea = styled.section`
  height: 685px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BoardLinktexth2 = styled.h2`
  color: #000;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Inter;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 50% */
  width: 1628px;
`;

export const BoardLinkgroup = styled.div`
  width: 1628px;
  height:492px;
  background-color: azure;
  display: flex;
  justify-content: space-between;

`;

export const BoardLinkprovider = styled.div`
  width: 788px;
  height: 492px;
  flex-shrink: 0;
  background-color: #BBEAB7;
  background-image: url(${ProviderImg});
  background-repeat: no-repeat;
  background-position: right 20px bottom 35px;
  display:flex;
  flex-direction: column;
  align-items: flex-start;
  `;


export const BoardLinkSeller = styled.div`
  width: 788px;
  height: 492px;
  flex-shrink: 0;
  background-color: #C0E0EE;
  background-image: url(${SellerImg});
  background-repeat: no-repeat;
  background-position: right 20px bottom 35px;
`;

export const BoardLinkTextbox = styled.div`
  width: 444px;
  height: 132px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  margin-left: 40px;
`;

export const BoardLinktexth3 = styled.h3`
  color: #262626;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Inter;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
`;

export const BoardLinktexth1 = styled.h1`
  color: #262626;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Inter;
  font-size: 80px;
  font-style: normal;
  font-weight: 700;
  margin-top: -45px;
`;

export const BoardLinkButton = styled.div`
  width: 433px;
  height: 82px;
  flex-shrink: 0;
  border-radius: 20px;
  background: #FFF;
  text-align: center;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Inter;
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  display:flex;
  justify-content: center;     
  align-items: center;
  margin-top: 125px;
  margin-left: 40px;
`;

export const PriceArea = styled.section`
  height: 1124px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PriceMoreBox = styled.div`
  width: 1626px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 70px;
`;

export const PriceMoreText = styled.h2`
  color: #000;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Inter;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
`;

export const PriceMoreButton = styled.div`
  width: 184px;
  height: 57px;
  boarder-radius: 32px;
  background: #76C56F;
  color: #FFF;
  display: flex;
  justify-content: center; 
  align-items: center; 
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Inter;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
`;

export const PriceList = styled.div`
  width: 1626px;
  height: 600px;
  display: flex;
  justify-content: space-between;
`;

export const PriceItem = styled.div`
  width: 450px;
  height: 600px;
  display: flex;
  background-image: url(${props => props.backgroundImage});
  background-repeat: no-repeat;
  margin-top: 30px;
 `;

 export const PriceItemTextBox = styled.div`
  width: 267px;
  height: 95px;
  flex-shrink: 0;
  margin-top: 460px;
 `;

 export const ItemName = styled.h4`
  color: #000;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Inter;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 66.667% */
 `;

 export const ItemPrice = styled.h3`
  color: #000;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Inter;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
 `;

 export const BoardLink02Area = styled.section`

 `;

 export const BoardLink02Talk = styled.div`
  height: 1240px;
  background: #F1F6F1;
  display: flex;
  flex-direction: column;
  align-items: center; 

 `;

 export const BoardLink02TextBox = styled.div`
  width: 1142px;
  height: 500px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center; 
 `;

 export const BoardLink02Textp = styled.p`
  color: #313431;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Inter;
  font-size: 32px;
  font-style: normal;
  font-weight: 300;
  margin-left: 150px;
 `;

 export const BoardLink02Texth1 = styled.h1`
  color: #161718;
  text-align: center;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Inter;
  font-size: 96px;
  font-style: normal;
  font-weight: 600;
  margin-top: -40px;
 `;

 export const EmphasisText = styled.span`
  color: #358138;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Inter;
  font-size: 110px;
  font-style: normal;
  font-weight: 700;
  line-height: 65px;
 `;


 export const BoardLink02TalkImg = styled.div`
  width: 1037px;
  height: 386px;
  flex-shrink: 0;
  background-image: url(${BoardLink02TalkImg01});
  border: none;
  margin-right: 700px;
  margin-top: -80px;
`;

export const BoardLink02TalkImg2 = styled.div`
  width: 1037px;
  height: 386px;
  flex-shrink: 0;
  background-image: url(${BoardLink02TalkImg02});
  border: none;
  margin-left: 700px;
  margin-bottom: 50px;
`;

export const AIsystem = styled.div`
  height: 1850px;
  display: flex;
  flex-direction: column;
  align-items: center; 
  margin-top: 120px;
`;

export const AIimg = styled.div`
background-image: url(${AIlogo});
width: 415px;
height: 345px;
flex-shrink: 0;
margin-left:120px;
`;

export const AItext = styled.h3`
width: 1200px;
height: 380px;
flex-shrink: 0;
color: #161718;
font-feature-settings: 'clig' off, 'liga' off;
font-family: Inter;
text-align: center;
font-size: 64px;
font-style: normal;
font-weight: 600;
line-height: 110px; /* 47% */
`;

export const AIEmphasisText = styled.span`
color: #161718;
text-align: center;
font-feature-settings: 'clig' off, 'liga' off;
font-family: Inter;
font-size: 100px;
font-style: normal;
font-weight: 700;
`;

export const Matching = styled.div`
width: 1650px;
height: 750px;
display: flex;

`;

export const MatchingImg = styled.div`
width: 763px;
height: 750px;
flex-shrink: 0;
background-image: url(${Match});
background-repeat: no-repeat;
`;

export const MatchingText = styled.h2`
color: #161718;
text-align: right;
font-feature-settings: 'clig' off, 'liga' off;
font-family: Inter;
font-size: 64px;
font-style: normal;
font-weight: 700;
margin-top: 535px;
`;

export const MatchingEmphasisText = styled.span`
  color: #161718;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Inter;
  font-size: 96px;
  font-style: normal;
  font-weight: 700;
`; 

export const BoardLink03Area = styled.section`
  height: 1250px;
  display: flex;
  flex-direction: column;
  align-items: center; 
`;

export const BoardLink03TextBox = styled.div`
  width: 709px;
  height: 470px;
  flex-shrink: 0;
`;

export const BoardLink03Texth3 = styled.h3`
  color: #161718;
  text-align: center;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: 210 OmniGothic;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: 38px; /* 95% */
`;

export const BoardLink03Texth1 = styled.h1`
  color: #3F9D37;
  text-align: center;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: 210 OmniGothic;
  font-size: 150px;
  font-style: normal;
  font-weight: 400;
  line-height: 47px; /* 31.333% */
`;

export const BoardLink03Texth2 = styled.h2`
  color: #000;
  text-align: center;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Inter;
  font-size: 64px;
  font-style: normal;
  font-weight: 400;
  line-height: 37.5px; /* 58.594% */
`;

export const BoardLink03Button = styled.div`
width: 1344px;
height: 204px;
display: flex;
justify-content: center; 
align-items: center; 
flex-shrink: 0;
border-radius: 100px;
background: #76C56F;
color: #FFF;
font-feature-settings: 'clig' off, 'liga' off;
font-family: Inter;
font-size: 80px;
font-style: normal;
font-weight: 700;
margin-top: 150px;
`;

export const Footer = styled.div`
height: 466px;
background: #76C56F;

`;