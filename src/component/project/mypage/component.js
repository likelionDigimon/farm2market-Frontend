import styled from "@emotion/styled";
import theme from "../../../styles/theme";
export const BackgroundContainer = styled.div`
  background-color: #fff;
  display: flex;
  width: 1920px;
  height: 100vh;
  flex-direction: column;
  background: #76116f;
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
  margin: 147px;
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
