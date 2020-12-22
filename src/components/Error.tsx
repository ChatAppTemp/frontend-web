import React from "react";
import { CenterWrapper } from "./Containers";
import { BigTitle, Body } from "./Text";

export type PageError = [string, number];

export const PageErrors = {
  NotFound: ["Page not found", 404] as PageError,
};

const ErrorPage = ({ err }: { err: PageError }) => {
  const [err_text, err_code] = err;
  return (
    <CenterWrapper style={{ height: "100vh" }}>
      <BigTitle>{err_code}</BigTitle>
      <Body>{err_text}</Body>
    </CenterWrapper>
  );
};

export default ErrorPage;
