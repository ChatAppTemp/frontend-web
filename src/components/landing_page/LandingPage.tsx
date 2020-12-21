import React from "react";
import styled from "styled-components";

import { BigTitle, Body } from "../Text";
import { CenterWrapper } from "../Containers";
import Header from "./Header";

const TitleWrapper = styled(CenterWrapper)`
  height: 100vh;
  background: rgb(255, 255, 255);
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 1) 0%,
    rgba(205, 205, 205, 1) 35%,
    rgba(154, 154, 154, 1) 100%
  );
`;

const LandingPage = () => {
  return (
    <div>
      <Header />
      <TitleWrapper>
        <BigTitle>Welcome to Chat App!</BigTitle>
        <Body>
          (This is temporary. Ideally we would want to have some pretty logos
          and graphics, etc.)
        </Body>
      </TitleWrapper>
    </div>
  );
};

export default LandingPage;
