import styled from "@emotion/styled";
import theme from "../../../styles/theme";
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
export const BackgroundContainer = styled.div`
  background-color: #fff;
  display: flex;
  width: 1920px;
  height: 100vh;
  flex-direction: column;
<<<<<<< Updated upstream
<<<<<<< Updated upstream
  background: #76116f;
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
  overflow-y: auto;
`;
export const Title = styled.div`
  color: #000;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Inter;
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.2; /* 55.556% */
  border-left: 5px black solid;
  padding-left: 20px;
<<<<<<< Updated upstream
  margin: 147px;
=======
  margin-left: 147px;
  margin-top: 20px;
>>>>>>> Stashed changes
  display: inline-flex;
`;
export const InnerContainer = styled.div`
  width: 1606px;
  height: 805px;
  flex-shrink: 0;
  display: flex;
  border-radius: 15px;
  background: #f8f9e3;
  flex-direction: row;
  margin: 147px;
<<<<<<< Updated upstream
`;

export const LeftContainer = styled.div`
  width: 443px;
  height: 805px;
  margin: 0px;
  border-radius: 15px 0 0 15px;
  background: #76c56f;
`;
export const RightContainer = styled.div`
  width: auto;
  height: 805px;
=======
  margin-top: 56px;
`;

export const LeftContainer = styled.div`
  width: 25%;
  height: 1005px;
  margin: 0px;
  border-radius: 15px 0 0 15px;
  background: #76c56f;
  padding: 66px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  color: #fff;
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Inter;
  ${theme.textVariants.body1}
`;
export const RightContainer = styled.div`
  width: auto;
  height: 1005px;
>>>>>>> Stashed changes
  flex-shrink: 0;
  margin: 0px;
  background: #f8f9e3;
  flex-direction: column;
`;
export const Head = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.3rem;
  margin-top: 3rem;
`;
export const HeadTitle = styled.div`
  ${theme.textVariants.heading2}
`;
export const Body = styled.div``;
export const BodyTitle = styled.div`
  display: flex;
`;

export const SelectBoxWrapper = styled.div`
  margin-right: 1rem;
`;
export const CustomRightContainer = styled(RightContainer)`
  display: flex;
  width: 75%;
`;

export const TopSection = styled.div`
  flex: 7;
  display: flex;
  flex-direction: column;
  padding: 0px 218px;
`;

export const BottomSection = styled.div`
  flex: 3;
  width: 100%;
  background-color: #f8f911;
`;

export const ContentWrapper = styled.div`
  background-color: #f8f911;
  height: 100%;
`;

export const SideContent = styled.div`
  height: 100%;
  width: 100%;
  background-image: url("/img/myback1.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  padding: 0px;
  text-align: center;
  color: #fff;
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  text-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.3);
  font-family: 210 OmniGothic;
  ${theme.textVariants.body1}
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Pagebox = styled.div`
  height: 100%;
  margin-right: 136px;
  display: flex;
  flex-direction: column;
  color: #276322;
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Inter;
  margin-bottom: 0px;
  ${theme.textVariants.body2_bold}
`;
export const SvgWithMargin = styled.div``;

export const PageboxText = styled.div`
  color: #000;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Inter;
  ${theme.textVariants.body4_bold}
`;
export const Mytitle = styled.p`
  margin-top: 148px;
  margin-bottom: 68px;
  ${theme.textVariants.body3_bold}
  color: #2f6c29;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Inter;
`;

export const Usertitle = styled.p`
  margin: 0px;
  margin-top: 65px;
  ${theme.textVariants.body3_bold}
  color: #FFF;
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Inter;
`;
export const Mybutton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  background: #fff;
  color: #266f1f;
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  width: 201px;
  height: 50px;
  margin: 20px auto;
  text-align: center;
`;

export const MyLoge = styled.div`
  color: #fff;
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  text-shadow: 0px 4px 4px 0px rgba(38, 51, 36, 0.54);
  font-family: 210 OmniGothic;
  font-size: 64px;
  font-style: normal;
  font-weight: 900;
`;
