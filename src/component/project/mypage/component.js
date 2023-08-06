import styled from "@emotion/styled";
import theme from "../../../styles/theme";

export const IndexContainer = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-content: center;
`;

export const InnerContainer = styled.div`
  margin-top: 100px;
  width: 804px;
  height: 701px;
  flex-shrink: 0;
  display: flex;
  border-radius: 30px;
  background: #76c56f;
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
