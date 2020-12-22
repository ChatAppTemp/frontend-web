import styled from "styled-components";

interface CenterWrapperProps {
  isRow?: boolean;
  style?: React.CSSProperties;
}

export const CenterWrapper = styled.div<CenterWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${(props) => (props.isRow ? "row" : "column")};

  height: 100%;
  width: 100%;
`;
