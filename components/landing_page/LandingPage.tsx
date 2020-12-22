import styled from "styled-components";

import { BigTitle, Body } from "@components/Text";
import { CenterWrapper } from "@components/Containers";
import Header from "./Header";

const TitleWrapper = styled(CenterWrapper)`
  height: 100vh;
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
